import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

function MainLower () {
    const currentData = useSelector((state : ReduxState) => state.forecast.data.currentData)

    function humidityRange () {
        if(currentData.humidity < 30) return "Low"
        else if (currentData.humidity < 60 && currentData.humidity > 30 ) return "Medium"
        else return "High"
    }

    function visibilityRange () {
        if(currentData.vis_km < 5) return "Low"
        else if (currentData.vis_km < 10 && currentData.vis_km >= 5 ) return "Medium"
        else return "High"
    }

    function airQualityRange () {
        if(currentData.aqi < 50) return "Good"
        else if (currentData.aqi < 100 && currentData.aqi > 50) "Moderate"
        else return "Unhealthy";
    }

    function windSpeedRange () {
        if(currentData.wind_kmph < 3.3) return "Light"
        else if (currentData.wind_kmph > 3.3 &&  currentData.wind_kmph < 8) return "Gentle Breeze"
        else return "Strong Breeze"
    }

    function uvRange () {
        if (currentData.UV <= 5) return "Low"
        else if (currentData.UV > 5 && currentData.UV < 8) return "Moderate"
        return "High"
    }
    return (
        <>
            <div className="row">
                <div className="col right-bottom-content">
                    <div className='single-card-wrapper'>
                        <h4>Humidity</h4>
                        <h2>{currentData.humidity} %</h2>
                        <p>{humidityRange()}</p>
                    </div>
                    <div className='single-card-wrapper'>
                        <h4>Visibility</h4>
                        <h2>{currentData.vis_km}</h2>
                        <p>{visibilityRange()}</p>
                    </div>
                    <div className='single-card-wrapper'>
                        <h4>UV Index</h4>
                        <h2>{currentData.UV}</h2>
                        <p>{uvRange()}</p>
                    </div>
                    <div className='single-card-wrapper'>
                        <h4>Sunrise, Sunset</h4>
                        <h2>{currentData.sunrise}</h2>
                        <p>{currentData.sunset}</p>
                    </div>
                    <div className='single-card-wrapper'>
                        <h4>Air Quality</h4>
                        <h2>{currentData.aqi}</h2>
                        <p>{airQualityRange()}</p>
                    </div>
                    <div className='single-card-wrapper'>
                        <h4>Wind Speed</h4>
                        <h2>{currentData.wind_kmph}</h2>
                        <p>{windSpeedRange()}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLower;