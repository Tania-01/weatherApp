"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherRouter = void 0;
const express_1 = require("express");
const weatherControlers_1 = require("../controlers/weatherControlers");
const router = (0, express_1.Router)();
router.get("/", weatherControlers_1.weatherControllers.getByCity);
router.get("/cord", weatherControlers_1.weatherControllers.getByCord);
exports.weatherRouter = router;
