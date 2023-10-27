import cors = require("cors");
import { Router, Request, Response } from "express";

import client from "./client";

const routes = Router()

routes.use(cors());

routes.use("/client", client);


routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;
