import { Router, Request, Response, NextFunction } from "express";
const routes: Router = Router();

routes.get("/order", (req: Request, res: Response, next: NextFunction) => {
  return res.send(`/v2/order`);
});

export default routes;
