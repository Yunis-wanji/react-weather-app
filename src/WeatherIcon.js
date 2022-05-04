import React from "react"
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props){
    return(
       < ReactAnimatedWeather
        icon= "CLEAR_DAY"
       color ='goldenrod'
       sizE = {512}
     animate = {true}
     />
    );
}