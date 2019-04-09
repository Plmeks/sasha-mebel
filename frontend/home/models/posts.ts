import axios from 'axios';

class PostsModel {
    uri = 'http://localhost:5000/api/posts/';

    getPosts = async () => {
        const postsResponse = await axios.get(this.uri);

        if (postsResponse.status === 200) {
            return postsResponse.data;
        }

        return [];
    }
}
export { PostsModel };
