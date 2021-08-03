import { IDrawStrategy } from "./interfaces/IDrawStrategy";
import { IMoveStrategy } from "./interfaces/IMoveStrategy";

export const enum FRAME_TYPES {
  SNAKE = 'snake',
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

export type Score = number;

export type Guard<T extends Event> = (event: T) => boolean;
export type Listener<T extends Event> = (event: T) => void;
