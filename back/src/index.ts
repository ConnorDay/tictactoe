import express from "express";
import expressWs from "express-ws";
import manager from "./game/manager";
import { Game } from "./game/game";

const app = express();
expressWs(app);

const router = express.Router()

Game.logger.info("test");

router.ws('/', (ws, req) => {
    manager.createGame();
    if (req.query.test !== 'thing') {
        console.log("NOT ALLOWED");
        ws.close();
        return;
    }

    ws.on('message', (message: any) => {
        console.log(message)
    });

    ws.on('close', () => {
        console.log("closed :(");
    });
});

app.use("/ws/", router);

app.use((req, res, next) => {
    console.log("got a request", req.url);
    next();
})

app.get("/", (req, res) => {
    res.json({
        foo: "bar",
    });
});

app.listen(3000, () => console.log("Server has started"));