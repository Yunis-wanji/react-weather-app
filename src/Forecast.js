import React, {useState, useEffect} from "react"
import axios from "axios"
import ForecastDay from "./ForecastDay"


export default function Forecast(props){
    const [loaded, setLoaded]=useState(false)
    const [forecast, setForecast]= useState(null)

    useEffect(()=>{
        setLoaded(false)
    },
      [props.coords]);
    

function showForecast(response){

setForecast(response.data.daily)


setLoaded(true)


}



if (loaded){
 
   
    return (
        <div className="Forecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index){
                    if(index<6){
                        return(
                            <div className="col-2" key={index}>
                    <ForecastDay data={dailyForecast}/>
               </div>
                        )
                    }
                }
                )}
                
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
