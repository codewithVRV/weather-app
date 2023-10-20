import './MainData.css'
import MainLower from '../MainLower/MainLower';
import ReduxState from '../../Interfaces/ReduxState';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function MainData () {
    const currentForecast = useSelector((state : ReduxState) => state.forecast.data.dayForecast)
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const [temperature, setTemperature] = useState(false)

    return (
        <div className="container right-content">
            <div className="row">
                <div className="col right-upper-content">
                    <div className='same'>
                        <h3>Day</h3>
                        <h3>Week</h3>
                    </div>
                   <div className='same'>
                    {(!temperature) ? <p onClick={() => setTemperature(!temperature)}>°C</p> : <p onClick={() => setTemperature(!temperature)}>°F</p>}
                   </div>
                </div>
            </div>
            <div className="row">
                <div className="col parent-day-wrapper">
                    <div className='day-wrapper'>
                        <p>{weekDays[new Date(currentForecast[0]?.date).getDay()]}</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        {(temperature) ? <h5>{currentForecast[0]?.avgtemp_c} °c</h5> : <h5>{currentForecast[0]?.avgtemp_f} °f</h5>}
                    </div>
                    <div className='day-wrapper'>
                        <p>{weekDays[new Date(currentForecast[1]?.date).getDay()]}</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        {(temperature) ? <h5>{currentForecast[1]?.avgtemp_c} °c</h5> : <h5>{currentForecast[1]?.avgtemp_f} °f</h5>}

                    </div>
                    <div className='day-wrapper'>
                        <p>{weekDays[new Date(currentForecast[2]?.date).getDay()]}</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        {(temperature) ? <h5>{currentForecast[2]?.avgtemp_c} °c</h5> : <h5>{currentForecast[2]?.avgtemp_f} °f</h5>}

                    </div>
                    <div className='day-wrapper'>
                        <p>{weekDays[new Date(currentForecast[3]?.date).getDay()]}</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        {(temperature) ? <h5>{currentForecast[3]?.avgtemp_c} °c</h5> : <h5>{currentForecast[3]?.avgtemp_f} °f</h5>}

                    </div>
                    <div className='day-wrapper'>
                        <p>{weekDays[new Date(currentForecast[4]?.date).getDay()]}</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        {(temperature) ? <h5>{currentForecast[4]?.avgtemp_c} °c</h5> : <h5>{currentForecast[4]?.avgtemp_f} °f</h5>}

                    </div>
                    <div className='day-wrapper'>
                        <p>{weekDays[new Date(currentForecast[5]?.date).getDay()]}</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        {(temperature) ? <h5>{currentForecast[5]?.avgtemp_c} °c</h5> : <h5>{currentForecast[5]?.avgtemp_f} °f</h5>}

                    </div>
                    <div className='day-wrapper'>
                        <p>{weekDays[new Date(currentForecast[6]?.date).getDay()]}</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        {(temperature) ? <h5>{currentForecast[6]?.avgtemp_c} °c</h5> : <h5>{currentForecast[6]?.avgtemp_f} °f</h5>}

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mt-4 mb-2 ms-4">
                    <h3>Today's Highlight</h3>
                </div>
            </div>

            <MainLower />
        </div>
    )
}

export default MainData;