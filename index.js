import express, { json } from "express";
import "./database/db_connection.js";
import { loginRouter } from "./routes/login_route.js";
import cors from "cors";
const app = express();
const PORT = 5000;
app.use(json());
app.use(cors());
app.use('/login', loginRouter);
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
