import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';


import { weatherRouter } from './router/weatherRouter';
import { configs } from './configs/config';
import swaggerConfig from "./configs/swaggerConfig";

const app = express();

app.use('/weather', weatherRouter);



const specs = swaggerJsdoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


const PORT = configs.PORT ;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
