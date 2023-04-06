import React,{useState} from "react";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";
import axios from "axios";



export default function Weather(props){
  
  const[WeatherData, setWeatherData]=useState({ ready:false });
  const[city, setCity]=useState(props.defaultCity);
  function hendleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature:response.data.main.temp,
      humidity:response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      wind:response.data.wind.speed,
      city:response.data.name
    });
    
  }
  function search(){
    const apiKey= "efc78e60bc878dfe627bc283d026d166" ;
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(hendleResponse);
  }
  function handleSubmit(event){
   event.preventDefault();
   search();
  }
  function handleCityChange(event){
   setCity(event.target.value);
  }
  if(WeatherData.ready){
    return  (
      <div className="Weather">
          <form onSubmit={handleSubmit}>
              <div className="row">
                  <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Enter a city..." 
                    className="form-control"
                    onChange={handleCityChange}/>
                   </div>
              
                   <div className="col-3">
                     <input type="Submit" value="Search" className="btn-btn-primary-w-100"/>
                  </div>
              </div>
          </form>
          <WeatherInfo data ={WeatherData}/>
       
      </div>
  );
  
  } else{
   
    search();
    return "Loading...";
  }
  
}