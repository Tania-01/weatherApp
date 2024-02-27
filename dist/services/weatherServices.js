"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherService = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../configs/config");
const API_URL = process.env.API_URL || "";
const API_KEY = config_1.configs.API_KEY;
class WeatherService {
    async getWeatherByCity(city) {
        try {
            const response = await axios_1.default.get(API_URL, {
                params: {
                    q: city,
                    appid: API_KEY,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
            throw new Error("Failed to fetch weather data");
        }
    }
    async getWeatherByCoordinates(lat, lon) {
        try {
            const response = await axios_1.default.get(API_URL, {
                params: {
                    lat: lat,
                    lon: lon,
                    appid: API_KEY,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
            throw new Error("Failed to fetch weather data");
        }
    }
}
exports.weatherService = new WeatherService();
