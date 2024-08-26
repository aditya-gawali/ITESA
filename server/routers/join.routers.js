import { Router } from "express";
import { createJoin} from "../controllers/join.controllers.js";
import cors from 'cors';
const joinRouter = Router();
const corsOptions = {
    origin: 'https://itesa.onrender.com/',//(https://your-client-app.com)
    optionsSuccessStatus: 200,
};


joinRouter.post('/api/join',  cors(corsOptions), createJoin);


export default joinRouter;