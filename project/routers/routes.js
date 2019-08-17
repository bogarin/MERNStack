//imports
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
//aplication exrpess
const app = express();
//integration libraries
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routes

module.exports = { app, express };
