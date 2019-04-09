import express from 'express';
import { PostsModel } from '../models/posts';
import { HomeRoutes, HomeViews } from '../routes/constants';

class HomeController {
    postsModel: PostsModel;

    constructor() {
        this.postsModel = new PostsModel();
    }

    index = async (_req: express.Request, res: express.Response) => {
        let posts: any[] = [];
        let error = '';

        try {
            posts = await this.getPostsList();
        } catch(err) {
            error = err;
        }

        res.render(HomeViews.Index, {posts, error});
    }

    about = (_req: express.Request, res: express.Response) => {
        res.render(HomeViews.About);
    }

    getPostsList = async () => {
        return await new PostsModel().getPosts();
    }
}

export { HomeController };
