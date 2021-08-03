import { SNAKE_FILL_COLOR, SNAKE_PART_SIZE, SNAKE_STROKE_COLOR } from "../constants";
import { IDrawElement } from "../interfaces/IDrawElement";
import { IDrawStrategy } from "../interfaces/IDrawStrategy";

export class SnakeDrawStrategy implements IDrawStrategy {
  draw(drawContext: CanvasRenderingContext2D, drawElement: IDrawElement): void {
    drawContext.fillStyle = SNAKE_FILL_COLOR;
    drawContext.strokeStyle = SNAKE_STROKE_COLOR;
    drawContext.fillRect(drawElement.x, drawElement.y, SNAKE_PART_SIZE, SNAKE_PART_SIZE);
    drawContext.strokeRect(drawElement.x, drawElement.y, SNAKE_PART_SIZE, SNAKE_PART_SIZE);
  }
}