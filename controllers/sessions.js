import Session from "../models/session.js";
import Player from "../models/player.js";

export const getSessions = async (req, res) => {
    try {
        const sessions = await Session.find();

        res.status(200).json(sessions);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getSession = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);

        res.status(200).json(session);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createSession = async (req, res) => {
    const session = req.body;

    const newSession = new Session(session);

    console.log(newSession._id);
    console.log(newSession.sessionDate.toString());

    try {
        await newSession.save();

        res.status(201).json(newSession);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

    const players = newSession.players;

    for (let i = 0; i < players.length; i++) {
        console.log(players[i].playerName);
        try {
            const doesPlayerExist = await Player.exists({ playerName: players[i].playerName });
            var player;
            if (doesPlayerExist) {
                player = await Player.findOne({ playerName: players[i].playerName });
            } else {
                player = new Player({ 
                    playerName: players[i].playerName,
                });
                player.sessionHistory = [];
            }
    
            player.netProfit = parseFloat(player.netProfit) + parseFloat(players[i].playerProfit);
            player.sessionHistory.push({ 
                "sessionId": newSession._id,
                "sessionName": newSession.sessionName, 
                "sessionDate": newSession.sessionDate,
                "playerProfit": players[i].playerProfit,
            });
    
            await player.save();
    
            // res.status(200).json(player);
        } catch (error) {
            console.log(error);
            // res.status(404).json({ message: error.message })
        }
    }
}

export const deleteSession = async (req, res) => {
    try {
        const session = await Session.findByIdAndDelete(req.params.id);

        res.status(200).json("Session Deleted");
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateSession = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);

        session.players = req.body.players;
        session.logs = req.body.logs;

        await session.save();

        res.status(200).json(session);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}