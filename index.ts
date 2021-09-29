import express, {Application, Request, Response} from 'express';
import cors from 'cors';

const app: Application = express();

const PORT: number = 3000;

app.get('/', cors(), (req: Request, res: Response) => {
    res.send('<h1>Hello world</h1>');
    res.end();

});

app.listen(PORT, () => console.log(`listening port ${PORT}`));
