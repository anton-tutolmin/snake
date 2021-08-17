import { initialFruit, initialSnake, SnakeGameStatesActions } from "../../constants";
import { ITypedDrawElement } from "../../interfaces/IDrawElement";
import { getSnakeGameNotIntersectedCoords, keyCodeToMoveDirection } from "../../utils/functions";
import { GameState } from "./GameState";
import { Snake } from "../Snake";
import { Fruit } from "../Fruit";
import { FRAME_TYPES, MoveDireactions } from "../../types";
import { SnakeGameStateAnalyzer } from "./SnakeGameStateAnalyzer";
import { ISnakeDrawElement } from "../../interfaces/ISnakeDrawElement";

export class SnakeGameState extends GameState {
  private snake: Snake;
  private fruit: Fruit;
  private gameStateAnalyzer: SnakeGameStateAnalyzer;

  constructor() {
    super();
    this.snake = new Snake(initialSnake);
    this.fruit = new Fruit(initialFruit);
    this.gameStateAnalyzer = new SnakeGameStateAnalyzer();
  }

  public getDrawable(): ITypedDrawElement[] {
    return [...this.snake.getDrawElements(), ...this.fruit.getDrawElements()];
  }

  public nextState(): void {
    this.gameStateAnalyzer
      .getNextGameStateStrategy(this.snake, this.fruit)
      .action(this);
  }

  public updateSnakeMoveDirection(moveDirection: MoveDireactions): void {
    this.snake.updateMoveStrategy(moveDirection);
  }

  public moveSnake(): void {
    this.snake.move();
  }

  public growSnake(newElement: ISnakeDrawElement): void {
    this.snake.grow(newElement);
  }

  public getSnakeTail(): ISnakeDrawElement {
    return this.snake.getTail();
  }

  public spawnNewFruit(): void {
    const [x, y] = getSnakeGameNotIntersectedCoords(this.snake.getDrawElements());
    this.fruit = new Fruit({ type: FRAME_TYPES.FRUIT, x, y });
  }

  handleArrowButton(event: KeyboardEvent): void {
    const moveDirection = keyCodeToMoveDirection(event.key);
    this.updateSnakeMoveDirection(moveDirection);
  }
}