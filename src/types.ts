import { IDrawStrategy } from "./interfaces/IDrawStrategy";
import { IMoveStrategy } from "./interfaces/IMoveStrategy";
import { INextGameStateStrategy } from "./interfaces/INextGameStateStrategy";

export const enum FRAME_TYPES {
  SNAKE = 'snake',
  FRUIT = 'fruit',
}

export const enum MoveDireactions {
  UP = 'up',
  DOWN = 'down',
  RIGHT = 'right',
  LEFT = 'left',
}

export type DrawStrategies = {
  [key: string]: IDrawStrategy,
}

export type MoveStrategies = {
  [key: string]: IMoveStrategy,
}

export type NextGameStateStrategies = {
  [key: string]: INextGameStateStrategy,
}

export type Score = number;

export type Guard<T extends Event> = (event: T) => boolean;
export type Listener<T extends Event> = (event: T) => void;
