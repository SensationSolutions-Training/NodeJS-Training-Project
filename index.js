import express from "express";
import mongoose from 'mongoose';
import PostSchema from './models/post.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())

app.get("/",async (req, res) => {
  const dbPosts = await PostSchema.find();
  res.json({
    Posts: dbPosts,
  });
});

app.post("/create", async (req, res) => {
  const dbPosts = await PostSchema.create(req.body);
  res.json({
    Posts: dbPosts,
  });
});

app.put("/update/:id", async (req, res) => {
  await PostSchema.findByIdAndUpdate(req.params.id,req.body);
  res.send("Post Updated Successfully");
});

app.delete("/delete", (req, res) => {
  varPosts = [];
  console.log("Endpoint / is owrking...");

  res.send("DELETE METHOD: Hello World.");
});


mongoose.connect("mongodb://localhost:27017").then(()=>{
  console.log("Database Connected...")
})

app.listen(5000, () => {
  console.log("Server is running on PORT: ", 5000);
});
