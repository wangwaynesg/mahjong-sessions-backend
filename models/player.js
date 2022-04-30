import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
    playerName: {
        type: String,
        trim: true,
        required: true
    },
    netProfit: {
        type: Number,
        default: 0
    },
    sessionHistory: [{
        sessionId: {
            type: String,
            trim: true,
            required: true
        },
        sessionName: {
            type: String,
            trim: true,
            required: true
        },
        sessionDate: {
            type: Date,
            trim: true,
            required: true
        },
        playerProfit: Number
    }]
});

const Player = mongoose.model("Player", playerSchema);

export default Player;