const mongoose = require('mongoose');

const SavedNewsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    sourceName: {
        type: String,
    },
    author: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
    },
    urlToSource: {
        type: String
    },
    urlToImage: {
        type: String
    },
    publishedAt: {
        type: String
    },
    Content: {
        type: String
    }

});

module.exports = mongoose.model('news' , SavedNewsSchema);