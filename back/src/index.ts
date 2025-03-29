import app from "./app";
import createLogger from "./logger";
import ws_router from "./routes/websocket";

const logger = createLogger("Main Express App");

app.use((req, res, next) => {
    logger.http("got a request", { request: req})
    next();
})

app.use("/ws/", ws_router);

app.get("/", (req, res) => {
    res.json({
        foo: "bar",
    });
});

app.listen(3000, () => console.log("Server has started"));