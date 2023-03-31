const mongoose = require("mongoose")

const postsSchema = mongoose.Schema(
    {
        message: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true
        },
        likers: {
            type: [String]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('post', postsSchema)
