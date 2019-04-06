import express from 'express';
import { PostsModel } from '../../models/posts';
import { HomeRoutes } from '../../routes/client/constants';

class HomeController {
    postsModel: PostsModel;

    constructor() {
        this.postsModel = new PostsModel();
    }

    index = async (_req: express.Request, res: express.Response) => {
        let posts = [];
        let error = '';

        try {
            posts = await this.getPostsList();
        } catch(err) {
            error = err;
        }

        res.render(HomeRoutes.Index, {posts, error});
    }

    about = (req: express.Request, res: express.Response) => {
        res.render(HomeRoutes.About);
    }

    getPostsList = async () => {
        const postsResponse = await new PostsModel().getPosts();

        if (postsResponse.status == 200) {
            return postsResponse.data;
        }
    }
}

export { HomeController };
