import React from 'react'
import '../../App.css'


export default function WeatherData({w}) {

    function formatDate(dateString) 
    {
     const date = new Date(dateString); // Create a Date object from the string
   
     // Define arrays for days of the week and months
     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     const months = [
       "January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
     ];
 //   console.log(date.getDate())
     const dayOfWeek = daysOfWeek[date.getDay()]; 
     const monthName = months[date.getMonth()] + " " + date.getDate();
     // const year = date.getFullYear(); // Get full year
     const hours = String(date.getHours()).padStart(2, '0'); // Get hours, padded with leading zero
     const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes, padded with leading zero
     const seconds = String(date.getSeconds()).padStart(2, '0'); // Get seconds, padded with leading zero
   
     // console.log(dayOfWeek)
     return {
       dayOfWeek,
       monthName,
     //   year,
       time: `${hours}:${minutes}:${seconds}`
     };
   }
  
   
  return (
    <div className='data'>
        <div>
            <div className='dayofweek'>{formatDate(w.dt_txt).dayOfWeek}</div>
            <div>{formatDate(w.dt_txt).monthName +' , '+ formatDate(w.dt_txt).time}</div>
        </div>
        <div>
            <div>⭐️ {w.main.temp} F</div>
            <div>{w.weather[0].description}</div>
        </div>
    </div>
  )
}
