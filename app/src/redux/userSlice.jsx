import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/auth/login", { email, password }); 
      const data = response.data;
         console.log(data)
      if (data.user?._id || data.user?.id) {
        const imageUrl = `${process.env.REACT_APP_API_URL}/users/${data.user._id}/profile-pic?t=${Date.now()}`;
        data.user.profilePictureUrl = imageUrl;  
      }
      const cleanUser = {
        ...data.user,
        profilePicture: undefined,   
        profilePic: undefined,
        profileImage: undefined
      };

      const storedUserInfo = {
        user: cleanUser,
        token: data.token
      };
      localStorage.setItem("userInfo", JSON.stringify(storedUserInfo));
      
      return {
        token: data.token,
        user: data.user, 
      };
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Login failed" });
    }
  }
);


export const registerUser = createAsyncThunk(
  "user/register",
  async (signupdetails, { rejectWithValue }) => {
    try {
      const response = await api.post("/register", signupdetails);
      console.log("Register response:", response.data); //log error passing
      return response.data;
    } catch (error) {
      console.log("Register error:", error.response?.data || error.message); //log error passing tooo
      if (error.response && error.response.data?.errors) {
        const fieldErrors = {};
        error.response.data.errors.forEach((err) => {
          fieldErrors[err.path] = err.msg;
        });
        return rejectWithValue({ fieldErrors });
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (formData, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const userId = user.data?._id || user.data?.id || localStorage.getItem("userId");

      if (!userId) {
        throw new Error("User ID not found – please log in again");
      }
      const response = await api.patch(`/update/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
     const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
if (storedUserInfo) {
  // Strip image data before saving to storage
  const cleanUser = {
    ...response.data.user,
    profilePicture: undefined,
    profilePic: undefined,
    profileImage: undefined
  };
  storedUserInfo.user = cleanUser;
  localStorage.setItem("userInfo", JSON.stringify(storedUserInfo));
}

      return response.data.user;
    } catch (err) {
      console.error("Update user thunk failed:", err);
      if (err.response?.data?.errors) {
        const fieldErrors = {};
        err.response.data.errors.forEach((error) => {
          fieldErrors[error.path] = error.msg;
        });
        return rejectWithValue({ fieldErrors });
      }

      // Handle other backend errors (e.g. message from res.data.message)
      if (err.response?.data?.message) {
        return rejectWithValue({ message: err.response.data.message });
      }

      // Fallback: network error, timeout, etc.
      return rejectWithValue({
        message: err.message || "Failed to update profile. Please try again.",
      });
    }
  }
);
export const updatePassword = createAsyncThunk(
  'user/updatepassword',
  async({oldPassword, newPassword}, {getState, rejectWithValue})=>{
    try {
       const { user } = getState();
      const userId = user.data?.id || user.data?._id|| localStorage.getItem("userId");
       if (!userId) {
        throw new Error("User ID not found");
      }

      const res = await api.patch(`/update/${userId}/change-password`, {oldPassword, newPassword},
        {headers:{'Content-Type':'application/json'}}
      )
        console.log('Password update response:', res.data);
      return res.data;
    } catch (error) {

      if (error.response?.data?.message) {
        return rejectWithValue({ message: error.response.data.message });
      }
       return rejectWithValue({ message: error.message })
    }
   
  }
)
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):null
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: userInfoFromStorage?.user || null,
    token: userInfoFromStorage?.token || null,
    loading: false,
    error: null,
    fieldErrors: {},
    isLoggedIn: !!userInfoFromStorage?.token ,
  },
  reducers: {
    
    logOut: (state) => {
      state.data = null;
      localStorage.removeItem("token");
      state.token = null;
      state.isLoggedIn = false
      // Clear ALL localStorage items
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    },
    cleanEror: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.data = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("userInfo", JSON.stringify(action.payload))
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.token = null;
        state.data = null;
        state.loading = false;
        state.error = action.payload?.message;
      });
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.fieldErrors = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || null;
        state.fieldErrors = action.payload?.fieldErrors || {};
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.fieldErrors = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
  state.data = action.payload;
  state.loading = false;
})
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || null;
        state.fieldErrors = action.payload?.fieldErrors || {};
      });
  },
});

export const { logOut, cleanEror } = userSlice.actions;
export default userSlice.reducer;
