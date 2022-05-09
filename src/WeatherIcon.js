import React from "react"
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props){
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n" : "CLEAR-NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n" : "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n" :"PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n" : "CLOUDY",
        "09d": "RAIN",
        "09n" : "RAIN",
        "10d": "RAIN",
        "010n" : "RAIN",
        "011d": "CLEAR_DAY",
        "011n" : "CLEAR-NIGHT",
        "013d": "SNOW",
        "013n" : "SNOW",
        "050d": "FOG",
        "050n" : "FOG",
        
    }
    return(
       < ReactAnimatedWeather
        icon= {codeMapping[props.code]}
       color ='goldenrod'
       size = {props.size}
     animate = {true}
     />
    );
}