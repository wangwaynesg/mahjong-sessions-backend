import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
 
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const CONNECTION_URL = 'mongodb+srv://mahjong-sessions:mahjong-sessions@cluster0.rquqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));