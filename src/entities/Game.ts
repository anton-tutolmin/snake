import { GameStateTypes } from "../constants";
import { IGame } from "../interfaces/IGame";
import { drawStrategies } from "../strategies/index";
import { getCanvas, guardedListener } from "../utils/functions";
import { isArrowKeyCode } from "../utils/guards";
import { Board } from "./Board";
import { GameState } from "./GameState/GameState";
import { GameStateFactory } from "./GameState/GameStateFactory";

export class Game implements IGame {
  private timer: NodeJS.Timer | null;
  private gameState: GameState;
  private board: Board;

  constructor() {
    this.gameState = GameStateFactory.createGameState(GameStateTypes.SNAKE);
    this.board = new Board(getCanvas(), drawStrategies);
    this.timer = null;
  }

  public init(): void {
    window.addEventListener('keydown', event => {
      guardedListener<KeyboardEvent>(
        event,
        isArrowKeyCode,
        this.gameState.updateOnArrowButton.bind(this.gameState)
      );
    });
  }

  public start(): void {
    this.timer = setInterval(() => {
      this.board.clear();
      this.board.drawFrame(this.gameState.getDrawable());
      this.gameState.action();
    }, 100);
  }

  public stop(): void {
    this.timer && window.clearInterval(this.timer);
  }
}