import express from 'express';
import { PostsModel } from '../../models/posts';
import { HomeRoutes } from '../../routes/client/constants';

class HomeController {
    postsModel: PostsModel;

    constructor() {
        this.postsModel = new PostsModel();
    }

    getPostsList = async () => {
        const postsResponse = await new PostsModel().getPosts();

        if (postsResponse.status == 200) {
            return postsResponse.data;
        }
    }

    index = async (_req: express.Request, res: express.Response) => {
        const posts = await this.getPostsList();

        res.render(HomeRoutes.Index, {posts});
    }
}

export { HomeController };