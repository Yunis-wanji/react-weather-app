import React, {useState} from "react"
import WeatherIcon from "./WeatherIcon"
import axios from "axios"


export default function Forecast(props){
    const [loaded, setLoaded]=useState(false)
    const [forecast, setForecast]= useState(null)

function showForecast(response){

setForecast(response.data.daily)
console.log(response.data.daily)

setLoaded(true)


}



if (loaded){
 

    return (
        <div className="Forecast">
            <div className="row">
                <div className=" forecastDay col-2">
                    {forecast[0].dt}
                    <div className="Icon">
                        <WeatherIcon code={forecast[0].weather[0].icon} size={36}/>
                    </div>
                    <div className="MaxTemp">
                       {Math.round(forecast[0].temp.day)}°
                       
                       <span className="MinTemp m-3 opacity-50">
                       {Math.round(forecast[0].temp.night)}°
                       </span>
                    </div>
               </div>
        </div>
        </div>
    ) 
}
else{
    let latitude = props.coords.lat
    let longitude = props.coords.lon
let apiKey ="6b3e22288bad02398181e6baffd9185d"
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(showForecast)
return(null)

}
}
