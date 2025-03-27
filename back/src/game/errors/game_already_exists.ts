import { Game } from "../game";

export class GameAlreadyExists extends Error{
    public game: Game;
    constructor( game: Game ){
        super(`Game with code ${game.code} already exists`)
        this.game = game;
    }
}

