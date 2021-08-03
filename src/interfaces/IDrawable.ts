import { ITypedDrawElement } from "./IDrawElement";

export interface IDrawable {
  getDrawElements(): ITypedDrawElement[];
}