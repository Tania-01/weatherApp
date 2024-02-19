"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path = __importStar(require("path"));
const weatherRouter_1 = require("./router/weatherRouter");
const config_1 = require("./configs/config");
const app = (0, express_1.default)();
app.use('/weather', weatherRouter_1.weatherRouter);
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Weather API Documentation',
            version: '1.0.0',
            description: 'API documentation for weather endpoints',
        },
        components: {
            schemas: {
                WeatherResponse: {
                    type: 'object',
                    properties: {
                        coord: {
                            type: 'object',
                            properties: {
                                lon: { type: 'number' },
                                lat: { type: 'number' }
                            }
                        },
                        weather: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: { type: 'number' },
                                    main: { type: 'string' },
                                    description: { type: 'string' },
                                    icon: { type: 'string' }
                                }
                            }
                        },
                        base: { type: 'string' },
                        main: {
                            type: 'object',
                            properties: {
                                temp: { type: 'number' },
                                feels_like: { type: 'number' },
                                temp_min: { type: 'number' },
                                temp_max: { type: 'number' },
                                pressure: { type: 'number' },
                                humidity: { type: 'number' }
                            }
                        },
                        visibility: { type: 'number' },
                        wind: {
                            type: 'object',
                            properties: {
                                speed: { type: 'number' },
                                deg: { type: 'number' }
                            }
                        },
                        clouds: {
                            type: 'object',
                            properties: {
                                all: { type: 'number' }
                            }
                        },
                        dt: { type: 'number' },
                        sys: {
                            type: 'object',
                            properties: {
                                type: { type: 'number' },
                                id: { type: 'number' },
                                country: { type: 'string' },
                                sunrise: { type: 'number' },
                                sunset: { type: 'number' }
                            }
                        },
                        timezone: { type: 'number' },
                        id: { type: 'number' },
                        name: { type: 'string' },
                        cod: { type: 'number' }
                    }
                }
            }
        }
    },
    apis: [path.resolve(__dirname, './router/*.ts')],
};
const specs = (0, swagger_jsdoc_1.default)(options);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
const PORT = config_1.configs.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
