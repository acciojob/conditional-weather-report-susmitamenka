import React from 'react'


const WeatherDisplay=({weather})=>{
    const{temperature,Conditions}=weather;
    const tempColor = temperature>20 ?"red" : "blue";
    return(
        <div>
       <p>
        
        <span style={{color:tempColor}}>Temperature: {temperature}</span>
       </p>
       <p>Conditions: {Conditions}</p>
        </div>
    )
}
export default WeatherDisplay