import { FRAME_TYPES } from "../types";
import { ITypedDrawElement } from "./IDrawElement";

export interface IFruitDrawElement extends ITypedDrawElement {
  type: FRAME_TYPES.FRUIT;
}