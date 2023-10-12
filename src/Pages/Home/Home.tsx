import MainData from '../../Components/MainData/MainData'
import SideBar   from '../../Components/SideBar/SideBar'
import './Home.css'

function Home () {
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