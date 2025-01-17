import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import path from 'path';
// import data from './data.js';
// import User from './models/userModel.js';
// import productRouter from './routers/productRouter.js';
// import userRouter from './routers/userRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/' , (req, res) => {
    res.send('Server is ready');
});

app.listen(5000, () => {
    console.log('Server at http://localhost:5000');
});
