import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import connectMongodb from "./config/connectMongodb.js";
import musicRoute from "./routes/musicRoute.js";
import authRoute from "./routes/authRoute.js";
import playlistRoute from "./routes/playlistRoute.js";
import historyRoute from "./routes/historyRoute.js";
import favoriteRoute from "./routes/favoriteRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

connectMongodb();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}));
app.use(express.json());

// API SONGS
app.use('/api', musicRoute);

// API AUTH
app.use('/', authRoute);

// API PLAYLISTS
app.use('/api', playlistRoute);

// API HISTORY
app.use('/api', historyRoute);

// API FAVORITES
app.use('/api', favoriteRoute);

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Music API',
      version: '1.0.0',
      description: 'API for music data',
    },
<<<<<<< HEAD
    servers: [{
      url: `http://localhost:${port}`,
    }, ],
=======
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
>>>>>>> 82cbb61afa4e27faea03b96fe180ea72a66c471d
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});