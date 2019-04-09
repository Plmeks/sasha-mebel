import express from 'express';
import { PostsModel } from '../models/posts';

class ApiController {
    postsModel: PostsModel;

    constructor() {
        this.postsModel = new PostsModel();
    }

    getPosts = async (_req: express.Request, res: express.Response) => {
        res.send(await this.postsModel.getPosts());
    }

    postPostItem = async (req: express.Request, res: express.Response) => {
        await this.postsModel.postPosts({
            text: req.body.text,
            createdAt: new Date()
        });

        res.status(201).send();
    }

    deletePostItem = async (req: express.Request, res: express.Response) => {
        await this.postsModel.deletePosts(req.params.id);

        res.status(200).send();
    }
}

export { ApiController };
