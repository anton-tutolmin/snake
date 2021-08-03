import { IDrawElement } from "./IDrawElement";

export interface IDrawStrategy {
  draw(drawContext: CanvasRenderingContext2D, drawElement: IDrawElement): void;
}