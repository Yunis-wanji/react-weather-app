import React, {useState} from "react"

export default function WeatherTemp(props){

    const[unit, setUnit]=useState("celsius")

    function showFahrenheit(event){
    event.preventDefault()
    setUnit("Fahrenheit")

    }

    function showCelsius(event){
     event.preventDefault()
     setUnit("celsius")
    }

    if (unit=== "celsius"){

      
    
    return (
        <div className="WeatherTemp fs-5">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="units"> {""}°C | {""} <a href="/" onClick={showFahrenheit}>{""}°F</a></span>
        </div>
    )
    }else{
        let fahrenheittemp =(props.celsius* 9/5) + 32 
        return (
            <div className="WeatherTemp fs-5">
            <span className="temperature">{Math.round(fahrenheittemp)}</span>
            <span className="units"> {""} <a href="/" onClick={showCelsius} >°C </a>|{""}°F</span>
        </div>
        )
    }
}