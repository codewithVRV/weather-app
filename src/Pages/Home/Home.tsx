import MainData from '../../Components/MainData/MainData'
import SideBar   from '../../Components/SideBar/SideBar'
import { useEffect, useState } from "react";
import './Home.css'
import { fetchData } from '../../Redux/Slices/Forecastslice';
import { useAppDispatch } from '../../Hooks/hook';
import axios from 'axios';

function Home () {

    const dispatcher = useAppDispatch()
    const [city, setCity] = useState('')
    const [newCity, setNewCity] = useState('')

    function addNewCity (newValue : string) {
        setNewCity(newValue)
        dispatcher(fetchData(newCity))
        
    }
    useEffect (() => {
        navigator.geolocation.getCurrentPosition( async (position) => {
            // const response = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOCATION_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
            const response = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOCATION_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
            setCity(response?.data?.address?.city)
        })
        if(!city)
            dispatcher(fetchData("meerut"))
        else 
            dispatcher(fetchData(city))
    }, [newCity])


    

    return (
        <div className='weather-app-wrapper'>
            <div className='d-flex '>
                <SideBar newCity={(newValue : string) => addNewCity(newValue)}/>
                <MainData />
            </div>
        </div>
    )
}

export default Home;