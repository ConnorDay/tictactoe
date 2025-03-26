import express from "express";
import http from "http";
import expressWs from "express-ws";

const app = express();
expressWs(app);

const router = express.Router()

router.ws('/', (ws, req) => {
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