import { Router } from "express";
import { createJoin} from "../controllers/join.controllers.js";

const joinRouter = Router();




joinRouter.post('/api/join', createJoin);


export default joinRouter;