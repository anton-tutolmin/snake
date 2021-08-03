import { GameStateTypes, keyCodes, SCREEN_HEIGHT, SCREEN_WIDTH, SNAKE_PART_SIZE } from "../constants";
import { ISnakePart } from "../interfaces/ISnakePart";
import { MoveDireactions } from "../types";

export function isSnakeOnScreenBoundry(snakeHead: ISnakePart, moveDirection: MoveDireactions): boolean {
  const { x: xCoord, y: yCoord } = snakeHead;

  return (
    (moveDirection === MoveDireactions.LEFT && xCoord === 0) ||
    (moveDirection === MoveDireactions.RIGHT && xCoord === SCREEN_WIDTH - SNAKE_PART_SIZE) ||
    (moveDirection === MoveDireactions.UP && yCoord === 0) ||
    (moveDirection === MoveDireactions.DOWN && yCoord === SCREEN_HEIGHT - SNAKE_PART_SIZE)
  );
}

export function isArrowKeyCode(event: KeyboardEvent) {
  return keyCodes.includes(event.key);
}

export function isSnakeGameState(gameStateType: string) {
  return gameStateType === GameStateTypes.SNAKE;
}