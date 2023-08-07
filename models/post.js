import mongoose from "mongoose";


const Post = mongoose.Schema({
    title: String,
    description: String
})


const PostSchema = mongoose.model("Posts", Post);

export default PostSchema;