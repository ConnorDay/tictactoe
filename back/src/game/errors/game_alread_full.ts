import { Game } from "../game";

export class GameAlreadyFull extends Error {
    public game: Game;
    constructor( game: Game ){
        super(`Game with code '${game.code}' is already full.`);
        this.game = game;
    }
}
