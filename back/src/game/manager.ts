import WebSocket from "ws";
import { Game } from "./game"
import { GameAlreadyExists } from "./errors/game_already_exists";

class Manager{
    private _games: {[key: string]: Game} = {};
    private _queue: string[] = [];

    public createGame( broadcast: boolean = false ) {
        const game = new Game();

        if (this._games[game.code] !== undefined){
            throw new GameAlreadyExists(game);
        }

        this._games[game.code] = game;

        if (broadcast) {
            this._setupBroadcast;
        }
    }

    private _setupBroadcast( game: Game ) {
        this._queue.push(game.code);
    }

}

export default new Manager()