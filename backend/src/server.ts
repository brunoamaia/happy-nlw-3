import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'


const app = express();
app.use(cors());          // Define quem pode acessar o backend
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));   // acessar as imagens salvas

app.use(errorHandler);  // Tratamento de erro

app.listen(3333);