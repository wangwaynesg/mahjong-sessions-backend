import Likes from "../models/likes.js";

export const getLikes = async (req, res) => {
    try {
        const likes = await Likes.findById(req.params.id);

        res.status(200).json(likes);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createLikes = async (req, res) => {
    const likes = req.body;

    const newLikes = new Likes(likes);

    try {
        await newLikes.save();

        res.status(201).json(newLikes);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateLikes = async (req, res) => {
    try {
        const likes = await Likes.findById(req.params.id);

        likes.likes = req.body.likes;

        await likes.save();

        res.status(200).json(likes);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}