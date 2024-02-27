import axios from "axios";

import { configs } from "../configs/config";
import { WeatherResponse } from "../interfaces/weatherResponce.interface";

const API_URL: string = process.env.API_URL || "";
const API_KEY = configs.API_KEY;

class WeatherService {
  public async getWeatherByCity(city: string): Promise<WeatherResponse> {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
        },
      });
      return response.data as WeatherResponse;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw new Error("Failed to fetch weather data");
    }
  }

  public async getWeatherByCoordinates(
    lat: string,
    lon: string,
  ): Promise<WeatherResponse> {
    try {
      const response = await axios.get(API_URL, {
        params: {
          lat: lat,
          lon: lon,
          appid: API_KEY,
        },
      });
      return response.data as WeatherResponse;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw new Error("Failed to fetch weather data");
    }
  }
}

export const weatherService = new WeatherService();
