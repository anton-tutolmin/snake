import { SCREEN_HEIGHT, SCREEN_WIDTH, SNAKE_PART_SIZE } from "../constants";
import { IMoveStrategy } from "../interfaces/IMoveStrategy";
import { ISnakePart } from "../interfaces/ISnakePart";
import { FRAME_TYPES, MoveDireactions } from "../types";
import { isSnakeOnScreenBoundry } from "../utils/guards";

export class SnakeMoveUpStrategy implements IMoveStrategy {
  move(snakeParts: ISnakePart[]): void {
    if (isSnakeOnScreenBoundry(snakeParts[0], MoveDireactions.UP)) {
      snakeParts.unshift({
        x: snakeParts[0].x,
        y: SCREEN_HEIGHT - SNAKE_PART_SIZE,
        type: FRAME_TYPES.SNAKE,
      });
    } else {
      snakeParts.unshift({
        x: snakeParts[0].x,
        y: snakeParts[0].y - SNAKE_PART_SIZE,
        type: FRAME_TYPES.SNAKE,
      });
    }
    snakeParts.pop();
  }
}

export class SnakeMoveDownStrategy implements IMoveStrategy {
  move(snakeParts: ISnakePart[]): void {
    if (isSnakeOnScreenBoundry(snakeParts[0], MoveDireactions.DOWN)) {
      snakeParts.unshift({
        x: snakeParts[0].x,
        y: 0,
        type: FRAME_TYPES.SNAKE,
      });
    } else {
      snakeParts.unshift({
        x: snakeParts[0].x,
        y: snakeParts[0].y + SNAKE_PART_SIZE,
        type: FRAME_TYPES.SNAKE,
      });
    }
    snakeParts.pop();
  }
}

export class SnakeMoveRightStrategy implements IMoveStrategy {
  move(snakeParts: ISnakePart[]): void {
    if (isSnakeOnScreenBoundry(snakeParts[0], MoveDireactions.RIGHT)) {
      snakeParts.unshift({
        x: 0,
        y: snakeParts[0].y,
        type: FRAME_TYPES.SNAKE,
      });
    } else {
      snakeParts.unshift({
        x: snakeParts[0].x + SNAKE_PART_SIZE,
        y: snakeParts[0].y,
        type: FRAME_TYPES.SNAKE,
      });
    }
    snakeParts.pop();
  }
}

export class SnakeMoveLeftStrategy implements IMoveStrategy {
  move(snakeParts: ISnakePart[]): void {
    if (isSnakeOnScreenBoundry(snakeParts[0], MoveDireactions.LEFT)) {
      snakeParts.unshift({
        x: SCREEN_WIDTH - SNAKE_PART_SIZE,
        y: snakeParts[0].y,
        type: FRAME_TYPES.SNAKE,
      });
    } else {
      snakeParts.unshift({
        x: snakeParts[0].x - SNAKE_PART_SIZE,
        y: snakeParts[0].y,
        type: FRAME_TYPES.SNAKE,
      });
    }
    snakeParts.pop();
  }
}