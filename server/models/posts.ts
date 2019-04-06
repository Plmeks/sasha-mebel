import axios from 'axios';

class PostsModel {
    uri: string = 'http://localhost:5000/api/posts';

    async getPosts() {
        return await axios.get(this.uri);
    }
}

export { PostsModel };
