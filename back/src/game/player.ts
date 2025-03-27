import { WebSocket } from "ws";

export class Player {
    public socket: WebSocket;
    constructor (socket: WebSocket) {
        this.socket = socket;
    }

    public close() {
        this.socket.close();
    }
}