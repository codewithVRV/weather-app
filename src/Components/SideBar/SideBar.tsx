import { useSelector, } from 'react-redux';
import './SideBar.css'
import ReduxState from '../../Interfaces/ReduxState';

import {useState} from 'react'
function SideBar ({newCity} ) {

    const currentData = useSelector((state : ReduxState) => state.forecast.data.currentData)
    const currentLocation = useSelector((state: ReduxState) => state.forecast.data.location)
    const [inputCity, setInputCity] = useState('')

    function searchCity () {
        newCity(inputCity)
    }

    return (
        <div className="container left-content">
            <div className="row">
                <div className="col upper-content">
                    <input type="text" className="form-control search-bar" 
                     onChange={(e) => setInputCity(e.target.value)}
                     placeholder="Search here..." />
                    <i className="bi bi-search s-icon" onClick={searchCity}></i>
                </div>
            </div>
            <div className="row">
                <div className="col img-wrapper">
                    <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid'/>
                </div>
            </div>
            <div className="row">
                <div className="col ">
                    <div className='lower-content'>
                        <h1>{currentData.temp_c} <span>°C</span> </h1>
                        <p>Thursday, 6:38</p>
                    </div>
                    <div className='bottom-section'>
                        <i className="bi bi-geo-alt"></i>
                        <p> {currentLocation.region}, {currentLocation.name}, {currentLocation.country},</p>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default SideBar;