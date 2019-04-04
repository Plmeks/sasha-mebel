import express from 'express';
import mongodb from 'mongodb';

const router: express.Router = express.Router();

// get
router.get('/', async (_req, res) => {
    const postsCollection = await loadPostsCollection();
    const postsList = await postsCollection.find({}).toArray();
    
    res.send(postsList);
});

// post
router.post('/', async (req, res) => {
    const postsCollection = await loadPostsCollection();

    await postsCollection.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });

    res.status(201).send();
});

// delete
router.delete('/:id', async (req, res) => {
    const postsCollection = await loadPostsCollection();

    await postsCollection.deleteOne({_id: new mongodb.ObjectID(req.params.id)});

    res.status(200).send();
});

const loadPostsCollection = async () => {
    const client = await mongodb.MongoClient.connect(
        'mongodb://root:50198581994meks@ds044787.mlab.com:44787/sasha-mebel', {
            useNewUrlParser: true
        }
    );

    return client.db('sasha-mebel').collection('posts');
};

export { router };
