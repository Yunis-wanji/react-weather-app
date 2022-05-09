import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function ForecastDay(props){

    function maxtemp(){
        let max = Math.round(props.data.temp.day)
        return(max)
    }
    function mintemp(){
        let min =  Math.round(props.data.temp.night)
        return`${min}`
    }

    function day(){
         let date= new Date(props.data.dt*1000)
         let day = date.getDay();
 let days= ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
         return days[day]
    }

    return (
        <div>
        <div className="ForecastDay">
                    {day()}
                    </div>
                    <div className="Icon">
                        <WeatherIcon code={props.data.weather[0].icon} size={36}/>
                    </div>
                    <div className="MaxTemp">
                       {maxtemp()}°
                       
                       <span className="MinTemp m-3 opacity-50">
                       {mintemp()}°
                       </span>
                    </div>
                    </div>
    )
}