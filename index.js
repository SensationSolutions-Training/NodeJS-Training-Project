import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const PostSchema = mongoose.Schema({
  title: String,
  description: String
})

const Post = mongoose.model('Posts', PostSchema);

// Base URL : http://localhost:5000/getPost
const CONNECTION_URL = "mongodb+srv://test1:test1@test.3hls2cs.mongodb.net/"

app.get('/', async (req,res)=>{
  const posts = await Post.find();
  res.json({ Posts: posts });
})

app.get('/:id', async (req,res)=>{
  const posts = await Post.find({
    _id: req.params.id
  });
  res.json({ Posts: posts });
})

app.post('/create', async (req,res)=>{
  const newPost = await Post.create(req.body);
  res.json({ data: newPost })
})
app.patch('/updatePost/:id', async (req,res)=>{
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
  res.json({ data: updatedPost });
})
app.delete('/deletePost/:id', async (req,res)=>{
  await Post.findByIdAndDelete(req.params.id);
  res.send("Post Deleted Successfully.")
})

mongoose.connect(CONNECTION_URL).then(()=>{
  console.log("DB Connected...")
})

app.listen(5000, ()=>{
  console.log("Server is running...")
})
