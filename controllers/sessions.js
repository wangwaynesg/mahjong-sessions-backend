import Session from "../models/session.js";

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

    try {
        await newSession.save();

        res.status(201).json(newSession);
    } catch (error) {
        res.status(409).json({ message: error.message })
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