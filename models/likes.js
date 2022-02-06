import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
    likes: Number
});

const Likes = mongoose.model("Likes", likesSchema);

export default Likes;