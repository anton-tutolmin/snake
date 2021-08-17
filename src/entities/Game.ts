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
  private isPaused: boolean;

  constructor() {
    this.gameState = GameStateFactory.createGameState(GameStateTypes.SNAKE);
    this.board = new Board(getCanvas(), drawStrategies);
    this.timer = null;
    this.isPaused = true;
  }

  public init(): void {
    window.addEventListener('keydown',
      guardedListener<KeyboardEvent>(
        isArrowKeyCode,
        this.gameState.handleArrowButton.bind(this.gameState)
      )
    );
  }

  public start(): void {
    this.isPaused = false;
    this.timer = setInterval(() => {
      if (!this.isPaused) {
        this.board.clear();
        this.board.drawFrame(this.gameState.getDrawable());
        this.gameState.nextState();
      }
    }, 100);
  }

  public stop(): void {
    this.timer && window.clearInterval(this.timer);
  }
}