import axios from "axios";

interface IRegionObject {
    id: number,
    city: string,
    country: string,
    temperature: number,
    weather: string,
    about_weather: string,
    visibility: string,
    humidity: string,
    wind_speed: number,
    pressure: number

}

class RegionObject implements IRegionObject{
    id: number
    city: string
    country: string
    temperature: number
    weather: string
    about_weather: string
    visibility: string
    humidity: string
    wind_speed: number
    pressure: number

    constructor() {
    }

    async getAndMapDataByPosition(lat:number, lon:number, appid: string) {
        try{
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&units=metric&appid=${appid}`)
            const city = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${appid}`)
            this.city = city.data[0].name
            this.temperature = weather.data.current.temp
            this.weather = weather.data.current.weather[0].main
            this.about_weather = weather.data.current.weather[0].description
            this.visibility = weather.data.current.visibility/1000
            this.humidity = weather.data.current.humidity
            this.wind_speed = weather.data.current.wind_speed
            this.pressure = weather.data.current.pressure
        }catch
        {
            throw new Error("City Error")
        }
    }

    async getAndMapDataByCity(city: string, appid: string) {
        try
        {
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=daily&units=metric&appid=${appid}`)
            this.city = city
            this.temperature = weather.data.main.temp
            this.weather = weather.data.weather[0].main
            this.about_weather = weather.data.weather[0].description
            this.visibility = weather.data.visibility/1000
            this.humidity = weather.data.main.humidity
            this.wind_speed = weather.data.wind.speed
            this.pressure = weather.data.main.pressure
        }
        catch
        {
            throw new Error("City Error")
        }

    }

}

export  {
    //IRegionObject,
    RegionObject
}