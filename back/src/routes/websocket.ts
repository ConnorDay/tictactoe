import { Router } from "express";
import expressWs from "express-ws";
import manager from "../game/manager";

const router = Router()

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

export default router;