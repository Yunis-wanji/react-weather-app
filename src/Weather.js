import React from "react"
import "./Weather.css"

export default function Weather(){
    return(
         
        

        <div className="Weather">
            <div className="row">
                <div className="col-9">
            <form>
                <input 
                type="search" 
                placeholder="Type City"
                className="form-control"
                />
            </form>
            </div>
            <div className="col-3 mt-4">
            <input type="submit" value="submit"/>
            </div>
            </div>
            <h1 className="m-3">Nairobi</h1>
            <ul className="list-unstyled m-3">
                <li>Monday 10:02</li>
                <li>Sunny</li>
            </ul>
            <div className="row">
             <div className="col-6">
                 <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="sunny" />
                 19°C
             </div>
             <div className="col-6">
                 <ul className="list-unstyled">
                     <li>Humidity 76%</li>
                     <li>Precipitation 7%</li>
                     <li>Wind 16km/hr</li>
                 </ul>
             </div>

            </div>
            
        </div>
    )
}