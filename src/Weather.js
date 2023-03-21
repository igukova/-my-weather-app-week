import React from "react";
import './Weather.css';



export default function Weather (){
    return  (
    <div className="Weather">
       <h1>New York</h1>
       <ul>
        <li>Wendnesday 07:00</li>
        <li>Monstly Cloudly</li>
       </ul>
       <div className="row">
        <div className="col-6">
            <img scr="https://ssl.gstatic.com/onebox/weather/64/perty
            _cloudy.png" alt="Mostly Cloudy"/>
            6°C

        </div>
        <div className="col-6">
            <ul>
                <li>Prasipitation:15%</li>
                <li>Humidity:72%</li>
                <li>Wind:13km/h</li>
            </ul>
        </div>
       </div>
    </div>
        
        
)
}