import express from "express";
import authRoutes from './routes/auth.route.js'

const app = express();

app.use("api/auth",authenticate)
app.listen(5001, () => {
    console.log("Hello");
})