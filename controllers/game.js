import mongoose from "mongoose";
import { GameModel } from "../models/game.js"

export const getAllGames = async (req, res) => {
    try {
        let allGames = await GameModel.find({});
        res.json(allGames)
    }
    catch (err) {
        res.status(400).json({ type: "invalid operation", message: "sorry cannot get games" })
    }
}



export const getGameById = async (req, res) => {
    let { id } = req.params;
    try {
        if (!mongoose.isValidObjectId(id))
            return res.status(400).json({ type: "not valid id", message: "id not in right format" })
        let game = await GameModel.findById(id);
        if (!game)
            return res.status(404).json({ type: "no id", message: "no game with such id" })
        return res.json(game)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ type: "invalid operation", message: "sorry cannot get game" })
    }

}


export const deleteGame = async (req, res) => {
    let { id } = req.params;
    try {
        if (!mongoose.isValidObjectId(id))
            return res.status(400).json({ type: "not valid id", message: "id not in right format" })
        let game = await GameModel.findByIdAndDelete(id);
        if (!game)
            return res.status(404).json({ type: "no game to delete", message: "no game with such id to delete" })
        return res.json(game)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ type: "invalid operation", message: "sorry cannot get game" })
    }

}

export const addGame = async (req, res) => {
    let { name, price, color } = req.body;

    if (!name || !price|| !color)
        return res.status(404).json({ type: "missing params", message: "missing details in body name or price or color" })
    try {
        let sameGame = await GameModel.findOne({ name: name });
        if (sameGame)
            return res.status(409).json({ type: "same details", message: "there is already same game" })
        let newGame = new GameModel({ name,price, color});
        await newGame.save();
        return res.json(newGame)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ type: "invalid operation", message: "sorry cannot get game" })
    }

}