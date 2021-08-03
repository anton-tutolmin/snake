import { DEFAULT_SNAKE_MOVE_DIRECTION, initialSnake } from "../../constants";
import { ITypedDrawElement } from "../../interfaces/IDrawElement";
import { MoveStrategies } from "../../types";
import { keyCodeToMoveDirection } from "../../utils/functions";
import { GameState } from "./GameState";
import { Snake } from "../Snake";

export class SnakeGameState extends GameState {
  private snake: Snake;
  private snakeMoveStrategies: MoveStrategies;

  constructor(snakeMoveStrategies: MoveStrategies) {
    super();
    this.snakeMoveStrategies = snakeMoveStrategies;
    this.snake = new Snake(initialSnake, snakeMoveStrategies[DEFAULT_SNAKE_MOVE_DIRECTION]);
  }

  public getDrawable(): ITypedDrawElement[] {
    return [...this.snake.getDrawElements()];
  }

  public action(): void {
    this.snake.move();
  }

  public updateOnArrowButton(event: KeyboardEvent): void {
    const moveDirection = keyCodeToMoveDirection(event.key);
    this.snake.setMoveStrategy(this.snakeMoveStrategies[moveDirection]);
  }
}