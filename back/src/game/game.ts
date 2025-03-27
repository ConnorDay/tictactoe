import {randomUUID} from "crypto";
import { Player } from "./player";
import { GameAlreadyFull } from "./errors/game_alread_full";
import { EventManager } from "./event_manager";
import createLogger from "../logger";

enum Turn{
    Player_1,
    Player_2
}

type events = "closed";

export class Game{
    static logger = createLogger(this.name)

    public code: string;
    public started: boolean = false;

    private _board: boolean[] = [];
    private _turn: Turn = 0;
    private _player_1?: Player;
    private _player_2?: Player;

    private events = new EventManager<events>();

    constructor(){
        this.code = randomUUID();
    }

    public addPlayer( player: Player ) {
        if (this._player_1 === undefined) {
            this._player_1 = player;
        } else if (this._player_2 === undefined) {
            this._player_2 = player;
        } else {
            throw new GameAlreadyFull(this);
        }
    }

    public removePlayer( player: Player|1|2 ) {
        if (player === 1){
            this._player_1 = undefined;
        } else if (player === 2){
            this._player_2 = undefined;
        } else if ( this._player_2 === player ){
            this._player_1 = undefined;
        } else if ( this._player_2 === player ){
            this._player_2 = undefined;
        }

        this._endGame();
    }

    private _endGame() {
        this._player_1?.close();
        this._player_2?.close();

        console.log()

        this.events.emit("closed");
    }
}