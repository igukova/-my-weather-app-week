import React,{useState} from "react";
import './Weather.css';
import axios from "axios";



export default function Weather(props){
  
  const[weatherData, setWeatherData]=useState({ ready:false });
  function hendleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature:response.data.main.temp,
      humidity:response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind:response.data.wind.speed,
      city:response.data.name
    });
    
  }
  if(weatherData.ready){
    return  (
      <div className="Weather">
          <form>
              <div className="row">
                  <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control"/>
                   </div>
              
                   <div className="col-3">
                     <input type="Submit" value="Search" className="btn-btn-primary-w-100"/>
                  </div>
              </div>
          </form>
         <h1>{weatherData.city}</h1>
         <ul>
          <li>{weatherData.date.getDay}</li>
          <li className="text-kapitalize"> {weatherData.discription}</li>
         </ul>
         <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <img scr={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
                <div className="float-left">
                   <span className="temperature">{Math.round(weatherData.temperature)}</span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                  
                  <li>Humidity:{weatherData.humidity}</li>
                  <li>{weatherData.wind}</li>
              </ul>
             </div>
         </div>
      </div>
  );
  
  } else{
    const apiKey= "efc78e60bc878dfe627bc283d026d166" ;
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(hendleResponse);

    return "Loading...";
  }
  
}