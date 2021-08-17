import { DEFAULT_SNAKE_MOVE_DIRECTION } from "../constants";
import { IDrawable } from "../interfaces/IDrawable";
import { IMoveStrategy } from "../interfaces/IMoveStrategy";
import { ISnakeDrawElement } from "../interfaces/ISnakeDrawElement";
import { snakeMoveStrategies } from "../strategies/index";
import { MoveDireactions } from "../types";

export class Snake implements IDrawable {
  private moveStrategy: IMoveStrategy;

  constructor(
    private readonly drawElements: ISnakeDrawElement[],
  ) {
    this.moveStrategy = snakeMoveStrategies[DEFAULT_SNAKE_MOVE_DIRECTION];
  }

  public getDrawElements(): ISnakeDrawElement[] {
    return this.drawElements;
  }

  public getHead(): ISnakeDrawElement {
    return this.drawElements[0];
  }

  public getTail(): ISnakeDrawElement {
    return this.drawElements[this.drawElements.length - 1];
  }

  public updateMoveStrategy(moveDirection: MoveDireactions) {
    this.moveStrategy = snakeMoveStrategies[moveDirection];
  }

  public move(): void {
    this.moveStrategy.move(this.drawElements);
  }

  public grow(element: ISnakeDrawElement): void {
    this.drawElements.push(element);
  }
}