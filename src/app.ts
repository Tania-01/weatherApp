import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { configs } from "./configs/config";
import swaggerConfig from "./configs/swaggerConfig";
import { weatherRouter } from "./router/weatherRouter";

const app = express();

app.use("/weather", weatherRouter);

const specs = swaggerJsdoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = configs.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
