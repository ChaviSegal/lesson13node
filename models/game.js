import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
    name: String,
    price: Number,
    color: String
})

export const GameModel = mongoose.model("game", gameSchema);