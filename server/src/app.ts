import express from 'express';
import apiRoutes from "./routes/api";
import path from 'path';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config()
const app = express();


app.use('/api', apiRoutes);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.resolve(__dirname, '../../client/build')));
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'))
    })
}

export default app;