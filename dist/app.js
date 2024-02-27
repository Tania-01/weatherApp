"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const config_1 = require("./configs/config");
const swaggerConfig_1 = __importDefault(require("./configs/swaggerConfig"));
const weatherRouter_1 = require("./router/weatherRouter");
const app = (0, express_1.default)();
app.use("/weather", weatherRouter_1.weatherRouter);
const specs = (0, swagger_jsdoc_1.default)(swaggerConfig_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
const PORT = config_1.configs.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
