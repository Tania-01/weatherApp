import { Router } from "express";

import { weatherControllers } from "../controlers/weatherControlers";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: API endpoints for weather data
 */

/**
 * @swagger
 * /weather:
 *   get:
 *     summary: Get weather by city name
 *     tags: [Weather]
 *     parameters:
 *       - in: query
 *         name: city
 *         required: true
 *         description: City name for which weather data is requested
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Weather data for the specified city
 *       '500':
 *         description: Failed to fetch weather data
 */
router.get("/", weatherControllers.getByCity);

/**
 * @swagger
 * /weather/cord:
 *   get:
 *     summary: Get weather by coordinates
 *     tags: [Weather]
 *     parameters:
 *       - in: query
 *         name: lon
 *         required: true
 *         description: Longitude coordinate
 *         schema:
 *           type: string
 *       - in: query
 *         name: lat
 *         required: true
 *         description: Latitude coordinate
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Weather data for the specified coordinates
 *       '500':
 *         description: Failed to fetch weather data
 */
router.get("/cord", weatherControllers.getByCord);

export const weatherRouter = router;
