import { Request, Response, Express } from "express";
import express from 'express';
import customerRoutes from "./routes/cutomer.js";
import  env  from "dotenv";
import { customErrorHandler, DefaultErrorHandler } from "./Middleware/errorHandler";
import AppDataSource from "./db/dbConfig.js";



const app = express();
env.config();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use("/customer", customerRoutes)

app.use(customErrorHandler)
app.use(DefaultErrorHandler)
AppDataSource.initialize().then(() => {
    console.log("Database connection is established successfully.");
}).catch(err => {
    console.log("faild to connect to Database");
});

app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);

});

export default app;