import React from "react"
import "./Weather.css"
import axios from "axios"

export default function Weather(){
    // const [temp, setTemp]= useState(null)

    function showResponse(response){
      console.log(response.data);
    
    }
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=london&appid=3a2290173da6ce75d4dd3c66d5ec61b7&units=metric`
    axios.get(apiUrl).then(showResponse);

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
            <input type="submit" value="Search"/>
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
                 19C
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