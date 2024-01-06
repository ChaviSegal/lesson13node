
import express from "express";
import GameRouter from "./routes/game.js"
import { connectToDB } from "./db/connectToDb.js"

const app = express();
app.use(express.json());
connectToDB();

app.use("/api/game", GameRouter);


app.listen(3500, () => {
    console.log("app is listening on port 3500")
})