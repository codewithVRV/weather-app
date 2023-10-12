import axios from "axios";


const instance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    headers: {
        'Content-Type' : 'application/json'
    }
})

export default instance;