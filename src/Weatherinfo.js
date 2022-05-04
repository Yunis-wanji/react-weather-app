import React from "react"
import FormatDate from "./FormatDate"
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function Weatherinfo( props){
    return (
    <div>
         <h1 className="m-3">{props.data.name}</h1>
                <ul className="list-unstyled m-3">
                    <li><FormatDate date={props.data.date}/></li>
                    <li>{props.data.description}</li>
                </ul>
                <div className="row">
                 <div className="col-6 ">
                     <div className="float-left m-3" > 
                     <WeatherIcon code={props.data.icon} />
                    <WeatherTemp celsius={props.data.temp}/>
                     </div>
                   
                  
                    
                    
                 </div>
                 <div className="col-6">
                     <ul className="list-unstyled">
                         <li>Humidity: {props.data.humidity} %</li>
                         <li>Wind: {Math.round(props.data.wind)} {" "}km/hr</li>
                     </ul>
                 </div>
    
                </div>
    </div>
    );
}