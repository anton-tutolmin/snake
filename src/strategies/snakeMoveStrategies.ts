import { SCREEN_HEIGHT, SCREEN_WIDTH, SNAKE_PART_SIZE } from "../constants";
import { IMoveStrategy } from "../interfaces/IMoveStrategy";
import { ISnakeDrawElement } from "../interfaces/ISnakeDrawElement";
import { FRAME_TYPES, MoveDireactions } from "../types";
import { isSnakeOnScreenBoundry } from "../utils/guards";

export class SnakeMoveUpStrategy implements IMoveStrategy {
  move(snakeDrawElements: ISnakeDrawElement[]): void {
    if (isSnakeOnScreenBoundry(snakeDrawElements[0], MoveDireactions.UP)) {
      snakeDrawElements.unshift({
        x: snakeDrawElements[0].x,
        y: SCREEN_HEIGHT - SNAKE_PART_SIZE,
        type: FRAME_TYPES.SNAKE,
      });
    } else {
      snakeDrawElements.unshift({
        x: snakeDrawElements[0].x,
        y: snakeDrawElements[0].y - SNAKE_PART_SIZE,
        type: FRAME_TYPES.SNAKE,
      });
    }
    snakeDrawElements.pop();
  }
}

export class SnakeMoveDownStrategy implements IMoveStrategy {
  move(snakeDrawElements: ISnakeDrawElement[]): void {
    if (isSnakeOnScreenBoundry(snakeDrawElements[0], MoveDireactions.DOWN)) {
      snakeDrawElements.unshift({
        x: snakeDrawElements[0].x,
        y: 0,
        type: FRAME_TYPES.SNAKE,
      });
    } else {
      snakeDrawElements.unshift({
        x: snakeDrawElements[0].x,
        y: snakeDrawElements[0].y + SNAKE_PART_SIZE,
        type: FRAME_TYPES.SNAKE,
      });
    }
    snakeDrawElements.pop();
  }
}

export class SnakeMoveRightStrategy implements IMoveStrategy {
  move(snakeDrawElements: ISnakeDrawElement[]): void {
    if (isSnakeOnScreenBoundry(snakeDrawElements[0], MoveDireactions.RIGHT)) {
      snakeDrawElements.unshift({
        x: 0,
        y: snakeDrawElements[0].y,
        type: FRAME_TYPES.SNAKE,
      });
    } else {
      snakeDrawElements.unshift({
        x: snakeDrawElements[0].x + SNAKE_PART_SIZE,
        y: snakeDrawElements[0].y,
        type: FRAME_TYPES.SNAKE,
      });
    }
    snakeDrawElements.pop();
  }
}

export class SnakeMoveLeftStrategy implements IMoveStrategy {
  move(snakeDrawElements: ISnakeDrawElement[]): void {
    if (isSnakeOnScreenBoundry(snakeDrawElements[0], MoveDireactions.LEFT)) {
      snakeDrawElements.unshift({
        x: SCREEN_WIDTH - SNAKE_PART_SIZE,
        y: snakeDrawElements[0].y,
        type: FRAME_TYPES.SNAKE,
      });
    } else {
      snakeDrawElements.unshift({
        x: snakeDrawElements[0].x - SNAKE_PART_SIZE,
        y: snakeDrawElements[0].y,
        type: FRAME_TYPES.SNAKE,
      });
    }
    snakeDrawElements.pop();
  }
}