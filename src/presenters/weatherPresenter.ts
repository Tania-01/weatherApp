import { WeatherResponse } from "../interfaces/weatherResponce.interface";

export class WeatherPresenter {
  public static weatherToResponse(weather: WeatherResponse) {
    return {
      cord: weather.coord,
      name: weather.name,
      weather: weather.weather,
      main: weather.main,
      visibility: weather.visibility,
      wind: weather.wind,
      clouds: weather.clouds,
      sys: weather.sys,
      timezone: weather.timezone,
      id: weather.id,
    };
  }
}
