import React,{useState} from "react"
import "./Weather.css"
import axios from "axios"
import Weatherinfo from "./Weatherinfo"



export default function Weather(props){
    const [city, setCity]=useState(props.defaultCity)
    const [load, setLoad]=useState(false)
    const [weather, setWeather]= useState({})

    function showResponse(response){
        
      setWeather({
          temp: response.data.main.temp,
          humidity:response.data.main.humidity,
          wind:response.data.wind.speed,
          date:new Date(response.data.dt*1000),
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
          name:response.data.name
      })
      setLoad(true)
    
    }

    function search(){
        let apiKey="f5f8ed8bee9eac93fe2f640b18a47bbb"
        let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(showResponse);
    }

    function handleSubmit(event){
      event.preventDefault();
      search()
      
    }

       function showCity(event){
          setCity(event.target.value)
       }

    if (load){
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                
                    <input 
                    type="search" 
                    placeholder="Type City"
                    className="form-control"
                    onChange={showCity}
                    />
                    </div>
                
            
                <div className="col-3 ">
                <input type="submit" 
                value="Search"
                className="btn btn-primary w-100"/>
                </div>
                </div>
                </form>
                <Weatherinfo data={weather}/>
                </div> 
               
        )
    }  else{
        
       search();

        return(
                
                 "Loading..."
        )
    }   

   

    
}