import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: { "Content-Type": "application/json" }
})

api.interceptors.request.use((config) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
    console.log("[Interceptor] URL:", config.url);  // ← Add this
    console.log("[Interceptor] userInfo.token exists?", !!userInfo?.token);  // ← Add this
    
    if (!config.url.includes('/login') && !config.url.includes('/register')) {
        if (userInfo?.token) {
            config.headers["authorization"] = `Bearer ${userInfo.token}`;
            console.log("[Interceptor] Added authorization header");  // ← Add this
        } else {
            console.log("[Interceptor] No token found in userInfo");
        }
    }
    return config;
});

api.interceptors.response.use(
    (response) => response, // pass through on success
    (error) => {
        if (error.response && error.response.status === 403) {
            // Token expired or invalid -> log out
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/login"; // redirect to login
        }
        return Promise.reject(error);
    }
);

export default api