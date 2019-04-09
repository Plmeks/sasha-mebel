import mongodb from 'mongodb';

interface IPosts {
    _id?: string;
    text: string;
    createdAt: Date;
};

class PostsModel {
    async getPosts(): Promise<IPosts[]> {
        const collectionClient = await this.getCollectionClient();
        const postsList = await collectionClient.find({}).toArray();

        return postsList;
    }

    async postPosts(postItem: IPosts) {
        const collectionClient = await this.getCollectionClient();

        await collectionClient.insertOne(postItem);
    }

    async deletePosts(id: number) {
        const collectionClient = await this.getCollectionClient();

        await collectionClient.deleteOne({_id: new mongodb.ObjectID(id)});
    }

    async getCollectionClient() {
        const client = await mongodb.MongoClient.connect(
            'mongodb://root:50198581994meks@ds044787.mlab.com:44787/sasha-mebel', {
                useNewUrlParser: true
            }
        );

        return client.db('sasha-mebel').collection('posts');
    };
}

export { PostsModel };
