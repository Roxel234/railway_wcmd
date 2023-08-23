import express from "express";
import { PORT } from "./config.js";
import { routes } from "./routes.js";
import * as mid from "./middlewares.js";

const app = express();

app.use(express.json());
app.use(mid.fileSend);
app.use(routes);

app.listen(PORT,()=>console.log("Server on port",PORT));