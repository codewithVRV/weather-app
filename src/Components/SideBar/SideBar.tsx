import './SideBar.css'

function SideBar () {
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
                        <h1>38 <span>°C</span> </h1>
                        <p>Thursday, 6:38</p>
                    </div>
                    <div className='bottom-section'>
                        <i className="bi bi-geo-alt"></i>
                        <p>Uttar Pradesh, Meerut</p>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default SideBar;