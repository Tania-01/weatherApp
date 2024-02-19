import { Request, Response } from "express";
import {weatherService} from "../services/weatherServices";
import {WeatherPresenter} from "../presenters/weatherPresenter";


class WeatherControllers {
    public async getByCity(req: Request, res: Response) {
        const city = req.query.city as string;
        try {
            const weatherData = await weatherService.getWeatherByCity(city);
            res.json(WeatherPresenter.weatherToResponse(weatherData));
        } catch (error) {
            console.error('Error fetching weather data:', error);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }
    }

    public async getByCord(req: Request, res: Response) {
        const lon = req.query.lon as string;
        const lat = req.query.lat as string;
        try {
            const weatherData = await weatherService.getWeatherByCoordinates(lat, lon);
            res.json(WeatherPresenter.weatherToResponse(weatherData));
        } catch (error) {
            console.error('Error fetching weather data:', error);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }
    }
}

export const weatherControllers = new WeatherControllers();
