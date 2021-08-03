import { FRAME_TYPES } from "../types";

export interface IDrawElement {
  x: number;
  y: number;
}

export interface ITypedDrawElement extends IDrawElement {
  type: FRAME_TYPES;
}