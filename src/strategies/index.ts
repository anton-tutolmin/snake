import { DrawStrategies, FRAME_TYPES, MoveStrategies, MoveDireactions } from "../types";
import { SnakeDrawStrategy } from "./drawStrategies";
import { SnakeMoveDownStrategy, SnakeMoveLeftStrategy, SnakeMoveRightStrategy, SnakeMoveUpStrategy } from "./snakeMoveStrategies";

export const drawStrategies = {
  [FRAME_TYPES.SNAKE]: new SnakeDrawStrategy(),
} as DrawStrategies;

export const snakeMoveStrategies = {
  [MoveDireactions.UP]: new SnakeMoveUpStrategy(),
  [MoveDireactions.DOWN]: new SnakeMoveDownStrategy(),
  [MoveDireactions.RIGHT]: new SnakeMoveRightStrategy(),
  [MoveDireactions.LEFT]: new SnakeMoveLeftStrategy(),
} as MoveStrategies;