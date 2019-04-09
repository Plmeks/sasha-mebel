import express from 'express';
import path from 'path';
import cors from 'cors';

import { router as postsRouter } from './routes/api';
import { router as homeRouter } from './routes/home';

const app: express.Application = express();
const port = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs-locals'));
app.set('view engine', 'html');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use('/api', postsRouter);
app.use(['/home', '/'], homeRouter);

app.listen(port, () => {
    console.log(`Listening ${port} port!`);
});
