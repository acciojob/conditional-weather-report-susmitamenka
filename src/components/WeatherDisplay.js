import React from 'react'


const WeatherDisplay=({weather})=>{
    const{temperature,conditions}=weather;
    const tempColor = temperature>20 ?"red" : "blue";
    return(
        <div>
       <p>
        
        <span style={{color:tempColor}}>Temperature: {temperature}</span>
       </p>
       <p>{conditions}</p>
        </div>
    )
}
export default WeatherDisplay