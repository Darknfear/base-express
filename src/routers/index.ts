import { Router } from "express";
import OderV1 from './v1/order.route';
import OderV2 from "./v2/order.route";

const routes: Router = Router();
routes.use("/v1", OderV1);
routes.use("/v2", OderV2);


export default routes;
