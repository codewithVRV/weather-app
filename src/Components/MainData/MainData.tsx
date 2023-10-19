import './MainData.css'
import MainLower from '../MainLower/MainLower';
import ReduxState from '../../Interfaces/ReduxState';
import { useSelector } from 'react-redux';

function MainData () {
    const currentForecast = useSelector((state : ReduxState) => state.forecast.data.dayForecast)
    console.log("currentForecst", currentForecast)
    // console.log("forecast", currentForecast)
    return (
        <div className="container right-content">
            <div className="row">
                <div className="col right-upper-content">
                    <h3>Week</h3>
                    <p>°C</p>
                </div>
            </div>
            <div className="row">
                <div className="col parent-day-wrapper">
                    <div className='day-wrapper'>
                        <p>Monday</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        <h5>{currentForecast[0].avgtemp_c} °c</h5>
                    </div>
                    <div className='day-wrapper'>
                        <p>Monday</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        <h5>{currentForecast[1].avgtemp_c} °c</h5>
                        {/* <h5>26 °c</h5> */}
                    </div>
                    <div className='day-wrapper'>
                        <p>Monday</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        <h5>{currentForecast[2].avgtemp_c} °c</h5>
                        {/* <h5>26 °c</h5> */}
                    </div>
                    <div className='day-wrapper'>
                        <p>Monday</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        <h5>{currentForecast[3].avgtemp_c} °c</h5>
                        {/* <h5>26 °c</h5> */}
                    </div>
                    <div className='day-wrapper'>
                        <p>Monday</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        <h5>{currentForecast[4].avgtemp_c} °c</h5>
                        {/* <h5>26°c</h5> */}
                    </div>
                    <div className='day-wrapper'>
                        <p>Monday</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        <h5>{currentForecast[5].avgtemp_c} °c</h5>
                        {/* <h5>26 °c</h5> */}
                    </div>
                    <div className='day-wrapper'>
                        <p>Monday</p>
                        <div className='day-img-wrapper'>
                            <img src="https://i.ibb.co/rb4rrJL/26.png" alt="" className='img-fluid' />
                        </div>
                        <h5>{currentForecast[6].avgtemp_c} °c</h5>
                        {/* <h5>26 °c</h5> */}
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