import { IFruitDrawElement } from "./interfaces/IFruitDrawElement";
import { ISnakeDrawElement } from "./interfaces/ISnakeDrawElement";
import { FRAME_TYPES, MoveDireactions } from "./types";

export const CANVAS_ELEMENT_ID = 'screen';
export const SCREEN_WIDTH = 400;
export const SCREEN_HEIGHT = 400;
export const SNAKE_PART_SIZE = 10;
export const FRUIT_PART_SIZE = 10;
export const CLEAR_BACKGROUND_COLOR = 'lightgreen';
export const SNAKE_FILL_COLOR = 'lightblue';
export const SNAKE_STROKE_COLOR = 'darkblue';
export const FRUIT_FILL_COLOR = 'darkred';
export const FRUIT_STROKE_COLOR = 'lightred';

export const initialSnake = [
  { x: 200, y: 200, type: FRAME_TYPES.SNAKE },
  { x: 190, y: 200, type: FRAME_TYPES.SNAKE },
  { x: 180, y: 200, type: FRAME_TYPES.SNAKE },
  { x: 170, y: 200, type: FRAME_TYPES.SNAKE },
  { x: 160, y: 200, type: FRAME_TYPES.SNAKE },
] as ISnakeDrawElement[];

export const initialFruit = {
  x: 10,
  y: 10,
  type: FRAME_TYPES.FRUIT,
} as IFruitDrawElement;

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

export enum SnakeGameStatesActions {
  GAMEOVER = 'gameOver',
  DEFAULT = 'dafault',
  UP_SCORE = 'upScore',
}

export enum SnakeGameEntities {
  SNAKE = 'snake',
  FRUIT = 'fruit',
}