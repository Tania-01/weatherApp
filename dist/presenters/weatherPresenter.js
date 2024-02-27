"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherPresenter = void 0;
class WeatherPresenter {
    static weatherToResponse(weather) {
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
exports.WeatherPresenter = WeatherPresenter;
