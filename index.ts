import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import { postRouter } from "./routes/api-post-routes";

const app: Application = express();

const PORT = 3000;

const db= 'mongodb+srv://olaf-test:xKxmZJ73LD3zW3tE@cluster0.ddvuu.mongodb.net/node-blog?retryWrites=true&w=majority';

mongoose
    .connect(db)
    .then(() => console.log(('Connected to db ')))
    .catch((error) => console.log((error)));

app.listen(PORT, () => console.log(`listening port ${PORT}`));

app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use(postRouter);


app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello world</h1>');
    res.end();
});

app.use(express.urlencoded({extended: false}));
