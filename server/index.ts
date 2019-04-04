import express from 'express';
import bodyParser from 'body-parser';

import { router as postsRouter } from './routes/api/posts';

const app: express.Application = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/posts', postsRouter);

app.listen(port, () => {
    console.log(`Listening ${port} port!`);
});
