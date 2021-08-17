import { SnakeGameState } from "../entities/GameState/SnakeGameState";
import { NotImplementedException } from "../errors/errors";
import { INextGameStateStrategy } from "../interfaces/INextGameStateStrategy";

export class SnakeGameOverStrategy implements INextGameStateStrategy {
  public action(gameState: SnakeGameState): void {
    throw NotImplementedException;
  }
}

export class SnakeEatenFruitStrategy implements INextGameStateStrategy {
  public action(gameState: SnakeGameState): void {
    const snakeTail = gameState.getSnakeTail();

    gameState.moveSnake();
    gameState.growSnake(snakeTail);
    gameState.incrementScore();
    gameState.spawnNewFruit();
  }
}

export class SnakeGameDefaultStrategy implements INextGameStateStrategy {
  public action(gameState: SnakeGameState): void {
    gameState.moveSnake();
  }
}