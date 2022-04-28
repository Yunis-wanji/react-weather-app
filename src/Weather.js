import React,{useState} from "react"
import "./Weather.css"
import axios from "axios"
import Date from "./Date"

export default function Weather(){
    const [load, setLoad]=useState(false)
    const [weather, setWeather]= useState({})

    function showResponse(response){
        console.log(response.data)
      setWeather({
          temp: response.data.main.temp,
          humidity:response.data.main.humidity,
          wind:response.data.wind.speed,
          date:new Date(response.data.dt*1000),
          description: response.data.weather[0].main,
          name:response.data.name
      })
      setLoad(true)
    
    }

    if (load){
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
                <h1 className="m-3">{weather.name}</h1>
                <ul className="list-unstyled m-3">
                    <li><Date date={weather.date}/></li>
                    <li>{weather.description}</li>
                </ul>
                <div className="row">
                 <div className="col-6 ">
                     
                     <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="sunny" />
                       <span>
                    <h2 className="m-3">{Math.round(weather.temp)} °C</h2>
                  
                    </span>
                    
                 </div>
                 <div className="col-6">
                     <ul className="list-unstyled">
                         <li>Humidity: {weather.humidity} %</li>
                         {/* <li>{weather.precipitation}%</li> */}
                         <li>Wind: {Math.round(weather.wind)} {" "}km/hr</li>
                     </ul>
                 </div>
    
                </div>
                
            </div>
        )
    }  else{
        let city= "London"
        let apiKey="f5f8ed8bee9eac93fe2f640b18a47bbb"
        let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(showResponse);

        return(
                 "Loading..."
        )
    }   

   

    
}