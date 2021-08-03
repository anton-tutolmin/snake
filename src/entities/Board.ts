import { CLEAR_BACKGROUND_COLOR } from "../constants";
import { ITypedDrawElement } from "../interfaces/IDrawElement";
import { DrawStrategies } from "../types";

export class Board {
  private context: CanvasRenderingContext2D;
  private drawStrategies: DrawStrategies;

  constructor(private readonly canvas: HTMLCanvasElement, drawStrategies: DrawStrategies) {
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.drawStrategies = drawStrategies;
  }

  public clear(): void {
    this.context.fillStyle = CLEAR_BACKGROUND_COLOR;
    this.context.strokeStyle = CLEAR_BACKGROUND_COLOR;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public drawFrame(drawElements: ITypedDrawElement[]): void {
    drawElements.forEach(drawElement => {
      this.drawStrategies[drawElement.type].draw(this.context, drawElement);
    });
  }
}