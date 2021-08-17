import { FRAME_TYPES } from "../types";
import { ITypedDrawElement } from "./IDrawElement";

export interface ISnakeDrawElement extends ITypedDrawElement {
  type: FRAME_TYPES.SNAKE;
}