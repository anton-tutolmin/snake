import { FRAME_TYPES, MoveDireactions } from "./types";

export const CANVAS_ELEMENT_ID = 'screen';
export const SCREEN_WIDTH = 400;
export const SCREEN_HEIGHT = 400;
export const SNAKE_PART_SIZE = 10;
export const CLEAR_BACKGROUND_COLOR = 'lightgreen';
export const SNAKE_FILL_COLOR = 'lightblue';
export const SNAKE_STROKE_COLOR = 'darkblue';

export const initialSnake = [
  { x: 200, y: 200, type: FRAME_TYPES.SNAKE },
  { x: 190, y: 200, type: FRAME_TYPES.SNAKE },
  { x: 180, y: 200, type: FRAME_TYPES.SNAKE },
  { x: 170, y: 200, type: FRAME_TYPES.SNAKE },
  { x: 160, y: 200, type: FRAME_TYPES.SNAKE },
];

export const enum KEYCODES {
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ARROW_RIGHT = 'ArrowRight',
  ARROW_LEFT = 'ArrowLeft',
};

export const keyCodes = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
export const DEFAULT_SNAKE_MOVE_DIRECTION = MoveDireactions.RIGHT;

export enum GameStateTypes {
  SNAKE = 'snake',
}