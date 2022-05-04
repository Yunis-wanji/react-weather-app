import React from "react"
import WeatherIcon from "./WeatherIcon"
import axios from "axios"


export default function Forecast(){

function showForecast(response){

console.log(response.data)
}

    let latitude = 40.7
    let longitude = 70.8
let apiKey ="f5f8ed8bee9eac93fe2f640b18a47bbb"
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`


axios.get(apiUrl).then(showForecast)
return (
    <div className="Forecast">
        <div className="row">
            <div className="col-2">
                Mon
                <div className="Icon">
                    <WeatherIcon code="01d" size={36}/>
                </div>
                <div className="TempValue">
                    20°C
                </div>
           </div>
    </div>
    </div>
) 
}