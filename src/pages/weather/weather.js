import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './weather.css'

function Weather() {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    // const [time, setTime] = useState(new Date());
    

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2a265e1e2a2d06f25b12f72c62caea8c`

    
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }

    return (
        <>
        <div className='homeback'>
            <div className="app">
                <div className="container">
                    <div className="search">
                        <input
                            value={location}
                            onChange={event => setLocation(event.target.value)}
                            onKeyPress={searchLocation}
                            placeholder='Enter Location'
                            type="text" />
                    </div>
                    <div className="top">
                        <div className="location">
                            <p>{data.name}</p>
                        </div>
                        <div className="temp">
                            {data.main ? <h1 style={{fontFamily:"D2Coding"}}>{data.main.temp.toFixed() - 273}°C</h1> : null}
                        </div>
                        <div className="description">
                            {data.weather ? <p>{data.weather[0].main}</p> : null}
                        </div>
                    </div>

                    {data.name !== undefined &&
                        <div className="bottom">
                            <div className="feels">
                                {data.main ? <p className='bold'>{data.main.feels_like.toFixed() - 273}°C</p> : null}
                                <p>Feels Like</p>
                            </div>
                            <div className="humidity">
                                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                                <p>Humidity</p>
                            </div>
                            <div className="wind">
                                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            </div>
        </>
    );
}
export default Weather;
