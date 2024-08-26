import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT } from '../constants/index.constants.js';
import { DB_URL } from '../constants/index.constants.js';
import joinRouter from '../routers/join.routers.js';
import 'dotenv/config';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());

app.use(joinRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on Port - ${PORT}`)
})

mongoose.connect(DB_URL)
    .then(() => {
        console.log("connected to db...")
    })
    .catch(() => {
        console.log("connection failed...")
    })