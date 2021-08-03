import { CANVAS_ELEMENT_ID, KEYCODES, SCREEN_WIDTH } from "../constants";
import { Guard, Listener, MoveDireactions } from "../types";

export function keyCodeToMoveDirection(keyCode: string): MoveDireactions {
  if (keyCode === KEYCODES.ARROW_UP)
    return MoveDireactions.UP;

  if (keyCode === KEYCODES.ARROW_DOWN)
    return MoveDireactions.DOWN;
  
  if (keyCode === KEYCODES.ARROW_LEFT)
    return MoveDireactions.LEFT;

  return MoveDireactions.RIGHT;
}

export function guardedListener<T extends Event>(event: T, guard: Guard<T>, listener: Listener<T>) {
  if (guard(event))
    return listener(event);
}

export function getCanvas(): HTMLCanvasElement {
  const canvas = document.getElementById(CANVAS_ELEMENT_ID) as HTMLCanvasElement;
  canvas.setAttribute('width', SCREEN_WIDTH.toString());
  canvas.setAttribute('height', SCREEN_WIDTH.toString());

  return canvas;
}