import express from 'express';
import { ApiController } from '../controllers/api'

const router: express.Router = express.Router();
const apiController = new ApiController();
// get
router.get('/posts',apiController.getPosts);

// post
router.post('/posts', apiController.postPostItem);

// delete
router.delete('/posts/:id', apiController.deletePostItem);

export { router };
