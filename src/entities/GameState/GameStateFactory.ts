import { snakeMoveStrategies } from "../../strategies/index";
import { isSnakeGameState } from "../../utils/guards";
import { DefaultGameState } from "./DefaultGameState";
import { GameState } from "./GameState";
import { SnakeGameState } from "./SnakeGameState";

export class GameStateFactory {
  public static createGameState(gameStateType: string): GameState {
    if (isSnakeGameState(gameStateType)) {
      return new SnakeGameState(snakeMoveStrategies);
    }

    return new DefaultGameState();
  }
}