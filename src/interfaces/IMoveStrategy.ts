import { ITypedDrawElement } from "./IDrawElement";

export interface IMoveStrategy {
  move(drawElement: ITypedDrawElement[]): void;
}