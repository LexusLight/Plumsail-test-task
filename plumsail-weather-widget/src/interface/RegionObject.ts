interface IRegionObject {
    city: string,
    country: string,
    temperature: number,
    weather: string,
    about_weather: string,
    visibility: string,
    humidity: string,
    dew_point: number,
    wind_speed: number,
    pressure: number
}

class RegionObject implements IRegionObject{
    city: string
    country: string
    temperature: number
    weather: string
    about_weather: string
    visibility: string
    humidity: string
    dew_point: number
    wind_speed: number
    pressure: number

    constructor() {

    }
}

export  {
    //IRegionObject,
    RegionObject
}