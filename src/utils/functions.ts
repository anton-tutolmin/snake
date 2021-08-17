import { CANVAS_ELEMENT_ID, KEYCODES, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";
import { SnakeGameState } from "../entities/GameState/SnakeGameState";
import { NotImplementedException } from "../errors/errors";
import { IDrawElement } from "../interfaces/IDrawElement";
import { Guard, Listener, MoveDireactions } from "../types";
import { isCollision, isCoordsIntersect } from "./guards";

export function keyCodeToMoveDirection(keyCode: string): MoveDireactions {
  if (keyCode === KEYCODES.ARROW_UP)
    return MoveDireactions.UP;

  if (keyCode === KEYCODES.ARROW_DOWN)
    return MoveDireactions.DOWN;
  
  if (keyCode === KEYCODES.ARROW_LEFT)
    return MoveDireactions.LEFT;

  return MoveDireactions.RIGHT;
}

export function guardedListener<T extends Event>(guards: Guard<T> | Guard<T>[], listener: Listener<T>) {
  return (event: T) => {
    guards = Array.isArray(guards) ? guards : [guards];

    if (guards.every(guard => guard(event)))
      return listener(event);
  }
}

export function getCanvas(): HTMLCanvasElement {
  const canvas = document.getElementById(CANVAS_ELEMENT_ID) as HTMLCanvasElement;
  canvas.setAttribute('width', SCREEN_WIDTH.toString());
  canvas.setAttribute('height', SCREEN_WIDTH.toString());

  return canvas;
}

export function getSnakeGameNotIntersectedCoords(elements: IDrawElement[]) {
  return getNotIntersectedCoords(elements, SCREEN_WIDTH, SCREEN_HEIGHT);
}

export function getNotIntersectedCoords(elements: IDrawElement[], rangeX: number, rangeY: number): [number, number] {
  let x = getIntegerInRange(rangeX / 10) * 10;
  let y = getIntegerInRange(rangeY / 10) * 10;

  while (isCoordsIntersect([{ x, y }], elements)) {
    x = getIntegerInRange(rangeX / 10) * 10;
    y = getIntegerInRange(rangeY / 10) * 10;
  }

  return [x, y];
}

export function getIntegerInRange(range: number) {
  return Math.trunc(Math.random() * range);
}