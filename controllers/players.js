import Player from "../models/player.js";

export const getPlayers = async (req, res) => {
    try {
        const players = await Player.find();

        res.status(200).json(players);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getPlayer = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);

        res.status(200).json(player);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPlayer = async (req, res) => {
    const player = req.body;

    const newPlayer = new Player(player);

    try {
        await newPlayer.save();

        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deletePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);

        res.status(200).json("Player Deleted");
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updatePlayer = async (req, res) => {
    try {
        const doesPlayerExist = await Player.exists({ playerName: req.body.playerName });
        var player;
        if (doesPlayerExist) {
            player = await Player.findOne({ playerName: req.body.playerName });
        } else {
            player = new Player({ playerName: req.body.playerName });
        }

        player.netProfit = parseFloat(player.netProfit) + parseFloat(req.body.playerProfit);
        player.profitHistory.push({ "session": req.body.session, "playerProft": req.body.playerProfit, });

        await player.save();

        res.status(200).json(player);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}