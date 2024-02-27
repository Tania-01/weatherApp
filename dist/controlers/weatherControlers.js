"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherControllers = void 0;
const weatherPresenter_1 = require("../presenters/weatherPresenter");
const weatherServices_1 = require("../services/weatherServices");
class WeatherControllers {
    async getByCity(req, res) {
        const city = req.query.city;
        try {
            const weatherData = await weatherServices_1.weatherService.getWeatherByCity(city);
            res.json(weatherPresenter_1.WeatherPresenter.weatherToResponse(weatherData));
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
            res.status(500).json({ error: "Failed to fetch weather data" });
        }
    }
    async getByCord(req, res) {
        const lon = req.query.lon;
        const lat = req.query.lat;
        try {
            const weatherData = await weatherServices_1.weatherService.getWeatherByCoordinates(lat, lon);
            res.json(weatherPresenter_1.WeatherPresenter.weatherToResponse(weatherData));
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
            res.status(500).json({ error: "Failed to fetch weather data" });
        }
    }
}
exports.weatherControllers = new WeatherControllers();
