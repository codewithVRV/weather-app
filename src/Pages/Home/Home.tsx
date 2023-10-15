import MainData from '../../Components/MainData/MainData'
import SideBar   from '../../Components/SideBar/SideBar'
import { useEffect } from "react";
import './Home.css'
import { fetchData } from '../../Redux/Slices/Forecastslice';
import { useAppDispatch } from '../../Hooks/hook';

function Home () {

    const dispatcher = useAppDispatch()


    useEffect (() => {
    
        dispatcher(fetchData())
    }, [])
    return (
        <div className='weather-app-wrapper'>
            <div className='d-flex '>
                <SideBar />
                <MainData />
            </div>
        </div>
    )
}

export default Home;