import { useSelector } from 'react-redux';
import './SideBar.css'
import ReduxState from '../../Interfaces/ReduxState';

function SideBar () {

    const currentData = useSelector((state : ReduxState) => state.forecast.data.currentData)
    const currentLocation = useSelector((state: ReduxState) => state.forecast.data.location)
    return (
        <div className="container left-content">
            <div className="row">
                <div className="col upper-content">
                    <input type="text" className="form-control search-bar"  placeholder="Search here..." />
                    <i className="bi bi-search s-icon"></i>
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
                        <p>{currentLocation.country}, {currentLocation.region}, {currentLocation.name}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default SideBar;