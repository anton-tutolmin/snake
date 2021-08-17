import { GameStateTypes, keyCodes, SCREEN_HEIGHT, SCREEN_WIDTH, SNAKE_PART_SIZE } from "../constants";
import { IDrawElement } from "../interfaces/IDrawElement";
import { ISnakeDrawElement } from "../interfaces/ISnakeDrawElement";
import { MoveDireactions } from "../types";

export function isSnakeOnScreenBoundry(snakeHead: ISnakeDrawElement, moveDirection: MoveDireactions): boolean {
  const { x: xCoord, y: yCoord } = snakeHead;

  return (
    (moveDirection === MoveDireactions.LEFT && xCoord === 0) ||
    (moveDirection === MoveDireactions.RIGHT && xCoord === SCREEN_WIDTH - SNAKE_PART_SIZE) ||
    (moveDirection === MoveDireactions.UP && yCoord === 0) ||
    (moveDirection === MoveDireactions.DOWN && yCoord === SCREEN_HEIGHT - SNAKE_PART_SIZE)
  );
}

export function isArrowKeyCode(event: KeyboardEvent): boolean {
  return keyCodes.includes(event.key);
}

export function isSnakeGameState(gameStateType: string): boolean {
  return gameStateType === GameStateTypes.SNAKE;
}

export function isCoordsIntersect(elementList1: IDrawElement[], elementList2: IDrawElement[]): boolean {
  return !!elementList1.find(element1 =>
    elementList2.find(element2 =>
      element1.x === element2.x &&
      element1.y === element2.y  
    )
  );
}

export function isCollision(elements: IDrawElement[]) {
  return elements
    .find((baseElement, index) =>
      elements
      .slice(index + 1)
      .find(compareElement =>
        baseElement.x === compareElement.x &&
        baseElement.y === compareElement.y
      )
  );
}