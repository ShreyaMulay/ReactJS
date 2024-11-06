import React,{useEffect,useState} from 'react'
import WeatherData from './WeatherData';
import '../../App.css'

export default function Weather() {

  const [weather,setWeather] = useState()
  const KEY = '286b490ad95bad7984bfbe9d4a3c2453'; 
  const city = 'New York'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}&units=metric`;


  useEffect(() => {
    async function getWeather()
    {
        const resp = await fetch(apiUrl)
        const data = await resp.json()
        if(data.cod === "200") 
        {
            const filteredData = await getFiveDayForecast(data.list);
            setWeather(filteredData);
            console.log(filteredData)
        }
        else 
        {
            console.error('Error:', data.message);
        }
        // setWeather(data.list)
    }
    getWeather()

  },[]);

  function getFiveDayForecast(forecastList) 
  {
    const dailyForecast = [];
    const uniqueDays = new Set();
  
    forecastList.forEach(item => {
        const date = new Date(item.dt_txt);
        const day = date.getDate(); 
        const time = date.getHours(); 
    
        if(time === 12 && !uniqueDays.has(day)) 
        {
            dailyForecast.push(item); 
            uniqueDays.add(day); 
        }
    });
    return dailyForecast;
   }  

  
  return (
    <div>
        <h1 className='header'>5-Day Forecast</h1>
        <div className='weatherData'>
            {weather && weather.map(w=>(
                <WeatherData w={w} key={w.dt_txt}/>
            )
            )}
        </div>
        
    </div>
  )
}
