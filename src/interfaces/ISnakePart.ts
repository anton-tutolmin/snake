import { FRAME_TYPES } from "../types";
import { ITypedDrawElement } from "./IDrawElement";

export interface ISnakePart extends ITypedDrawElement {
  type: FRAME_TYPES.SNAKE;
}