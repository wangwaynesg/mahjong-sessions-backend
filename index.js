import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import sessionRoutes from "./routes/sessions.js";
import playerRoutes from "./routes/players.js";
import likesRoutes from "./routes/likes.js";

const app = express();
dotenv.config();
 
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/sessions", sessionRoutes);
app.use("/players", playerRoutes);
app.use("/likes", likesRoutes);
app.get('/', (req, res) => {
    res.send("Mahjong Sessions API");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));
