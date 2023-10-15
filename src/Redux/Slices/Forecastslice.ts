import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ForecastDataState from "../../Interfaces/ForecastDataState";

import axiosInstance from  '../../Config/axiosInstance'


const initialState : ForecastDataState = {
    status: 'default',
    data: {
        location: {
            localtime: '', 
            country: '', 
            region: '', 
            name: ''
        }, 
        dayForecast: [],
        currentData : {
            UV :0,
            wind_kmph: 0,
            humidity: 0,
            vis_km: 0,
            aqi: 0,
            // sunrise: '',
            // sunset: '',
            temp_c: 0,
            temp_f: 0,
            condition: '',
            is_day: false,
            chance_of_rain: 0,
        }
    },
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
            const {location, forecast, current} = action.payload.data;


            // setting location here

            state.data.location.country = location?.country;
            state.data.location.region = location?.region;
            state.data.location.name = location?.name;
            state.data.location.localtime = location?.localtime;

            // setting currentData here
            console.log("current data is", current)

            // state.data.currentData = currentdata
            state.data.currentData.UV = current?.UV
            state.data.currentData.wind_kmph = current?.wind_kph
            state.data.currentData.humidity = current?.humidity
            state.data.currentData.vis_km = current?.vis_km
            state.data.currentData.aqi = current?.air_quality.pm2_5
            state.data.currentData.temp_c = current?.temp_c
            state.data.currentData.temp_f = current?.temp_f
            state.data.currentData.condition = current?.condition.text
            state.data.currentData.is_day = current?.is_day
            // state.data.currentData.chance_of_rain = current?.is_day
            // state.data.currentData.sunrise = current?.air_quality.pm2_5


            // setting dayForecast 

            state.data.dayForecast = forecast.forecastday.map((forecastItem) => {
                return {
                    date: forecastItem.date,
                    avgtemp_c: forecastItem.day.avgtemp_c,
                    avgtemp_f: forecastItem.day.avgtemp_f,
                    condition: forecastItem.day.condition.text,
                    sunrise: forecastItem.astro.sunrise,
                    sunset: forecastItem.astro.sunset,
                }
            })

        })
    }
})

export default forecastSlice.reducer;