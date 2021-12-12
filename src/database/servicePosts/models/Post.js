const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    data: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.models.Post || mongoose.model('Post' , PostSchema );