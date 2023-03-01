import express, { json, Router } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express,json());
app.use(Router);

app.listen(process.env.PORT, ( function () {
    return console.log(`Servidor Iniciado na Porta: ${process.env.PORT}`);
}));