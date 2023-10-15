import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ForecastDataState from "../../Interfaces/ForecastDataState";

import axiosInstance from  '../../Config/axiosInstance'


const initialState : ForecastDataState = {
    status: 'default',
    data: undefined,
}


export const fetchData = createAsyncThunk('data/fetchdata', async () => {
    try{
        const response = await axiosInstance.get(`forecast.json?key=${import.meta.env.VITE_API_KEY}&q=meerut&aqi=yes&days=7`)
        console.log(response)
        return response;
    }
    catch (error) {
        console.log("error is", error)
    }
})


const forecastSlice = createSlice({
    name: 'forecast',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            if(!action.payload) return;
            console.log("action is", action)

        })
    }
})

export default forecastSlice.reducer;