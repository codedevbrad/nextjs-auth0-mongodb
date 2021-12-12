const Post = require('./models/Post');

const PostFindALL = ( ) => {
    return Post.find();
}

const PostCreate = async ( newPost ) => {
    return new Post( newPost ).save();
}

export {
    PostFindALL, PostCreate
}