import express from "express";
import cors from "cors";
import MessageRoute from "./routes/MessageRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(MessageRoute);

app.listen(3000, ()=> console.log('server up and running...'));