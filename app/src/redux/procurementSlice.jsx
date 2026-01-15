import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api"

export const createProcurement = createAsyncThunk(
  "procurement/create",
    async(formData, {rejectWithValue})=>{
        try{
            const data = await api.post('/create-procurement', formData);
            return data
        }catch(error){
            return rejectWithValue(error.response.data.message)
        }}
)

export const fetchProcurements = createAsyncThunk(
    'procurements/fetch',
    async(_, {rejectWithValue})=>{
        try {
            const myProcurements = await api.get('/fetch-procurements', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')?.token)}`
                }
            })
            return myProcurements.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

const procurementSlice = createSlice({
    name:'procurement',
    initialState: {procurements:[], currentProcurement:null, loading:false, error:null, success:false,},
    reducers: {
        resetProcurementReducer: (state)=> {
            state.currentProcurement = null;
            state.success = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        //create Procurement
        builder.addCase(createProcurement.fulfilled, (state, payload)=>{
            state.success = true
            state.currentProcurement = payload
            state.loading = false
        })
        .addCase(createProcurement.pending, (state)=>{
            state.success = false
            state.loading = true
        })
        .addCase(createProcurement.rejected, (state, payload)=>{
            state.success = false
            state.error = payload
        })
        //fetch
        .addCase(fetchProcurements.fulfilled, (state,payload)=>{
            state.procurements = payload
            state.success = true
            state.loading = false
        })
         .addCase(fetchProcurements.pending, (state)=>{
            state.success = false
            state.loading = true
        })
         .addCase(fetchProcurements.rejected, (state,payload)=>{
            state.error = payload
            state.success = false
            state.loading = false
        })
    }
})

export default procurementSlice.reducer
export const {resetProcurementReducer} = procurementSlice.actions