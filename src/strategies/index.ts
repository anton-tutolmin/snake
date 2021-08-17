import { SnakeGameStatesActions } from "../constants";
import { DrawStrategies, FRAME_TYPES, MoveStrategies, MoveDireactions, NextGameStateStrategies } from "../types";
import { FruitDrawStrategy, SnakeDrawStrategy } from "./drawStrategies";
import { SnakeMoveDownStrategy, SnakeMoveLeftStrategy, SnakeMoveRightStrategy, SnakeMoveUpStrategy } from "./snakeMoveStrategies";
import { SnakeEatenFruitStrategy, SnakeGameDefaultStrategy, SnakeGameOverStrategy } from "./snakeNextGameStateStrategies";

export const drawStrategies = {
  [FRAME_TYPES.SNAKE]: new SnakeDrawStrategy(),
  [FRAME_TYPES.FRUIT]: new FruitDrawStrategy(),
} as DrawStrategies;

export const snakeMoveStrategies = {
  [MoveDireactions.UP]: new SnakeMoveUpStrategy(),
  [MoveDireactions.DOWN]: new SnakeMoveDownStrategy(),
  [MoveDireactions.RIGHT]: new SnakeMoveRightStrategy(),
  [MoveDireactions.LEFT]: new SnakeMoveLeftStrategy(),
} as MoveStrategies;

export const nextGameStateStrategies = {
  [SnakeGameStatesActions.DEFAULT]: new SnakeGameDefaultStrategy(),
  [SnakeGameStatesActions.GAMEOVER]: new SnakeGameOverStrategy(),
  [SnakeGameStatesActions.UP_SCORE]: new SnakeEatenFruitStrategy(),
} as NextGameStateStrategies;

