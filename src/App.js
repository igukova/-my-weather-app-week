import React from 'react';
import Weather from './Weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
       
       <Weather defaultCity="New York"/>
         <footer>This project was coded by {""} <a href="https://github.com/igukova/" target="">Gukova Iryna</a> {""}  <a href="https://github.com/igukova/my-weather-app">Open-source code</a> </footer>
      </div>
    </div>
  );
}

export default App;
