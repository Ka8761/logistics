import axios from 'axios';
//'http://localhost:5000/api'
//process.env.REACT_APP_API_URL, 
//'http://10.232.4.227:3000'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // ← removed trailing space
    headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use((config) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
    console.log("[Interceptor] URL:", config.url);
    console.log("[Interceptor] userInfo.token exists?", !!userInfo?.token);
    
    if (!config.url.includes('/login') && !config.url.includes('/register')) {
        if (userInfo?.token) {
            config.headers["authorization"] = `Bearer ${userInfo.token}`;
            console.log("[Interceptor] Added authorization header");
        } else {
            console.log("[Interceptor] No token found in userInfo");
        }
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 403) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api;