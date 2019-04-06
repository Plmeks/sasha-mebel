import express from 'express';
import path from 'path';

import { router as postsRouter } from './routes/api/posts';
import { router as homeRouter } from './routes/client/home';

const app: express.Application = express();
const port = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', postsRouter);
app.use('/', homeRouter);

app.listen(port, () => {
    console.log(`Listening ${port} port!`);
});
