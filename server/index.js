import express  from "express";
import Connection  from "./database/db.js";
import dotenv from "dotenv";
import Router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";
import defaultData from "./DefaultData.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Router);

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = 8000;

Connection(USER,PASSWORD);

app.listen(PORT, ()=> console.log(`server is running on port no. ${PORT}`));

defaultData();
