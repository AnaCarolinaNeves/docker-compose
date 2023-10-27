import { Router } from "express";
import { ClientController as ClientController } from "../controllers";
const routes = Router();

routes.get('/historic', ClientController.getHistoricClient);
routes.get('/specific/:uuid', ClientController.getClient);
routes.post('/create', ClientController.postClient);
routes.delete('/delete/:uuid', ClientController.deleteClient);

export default routes;

