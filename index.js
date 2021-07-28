import express, { json } from "express";
import "./database/db_connection.js";
import { loginRouter } from "./routes/login_route.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Welcome");
});
app.use('/login', loginRouter);
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
