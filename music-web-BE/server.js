import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import musicRoute from "./routes/musicRoute.js";

dotenv.config();
const app = express();

app.use(cors({ 
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use('/api', musicRoute);

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Music API',
      version: '1.0.0',
      description: 'API for music data',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
