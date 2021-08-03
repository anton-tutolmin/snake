import { IDrawable } from "../interfaces/IDrawable";
import { IMoveStrategy } from "../interfaces/IMoveStrategy";
import { ISnakePart } from "../interfaces/ISnakePart";

export class Snake implements IDrawable {
  constructor(
    private readonly snakeParts: ISnakePart[],
    private moveStrategy: IMoveStrategy,
  ) {}

  public getDrawElements(): ISnakePart[] {
    return this.snakeParts;
  }

  public getHead(): ISnakePart {
    return this.snakeParts[0];
  }

  public setMoveStrategy(moveStrategy: IMoveStrategy) {
    this.moveStrategy = moveStrategy;
  }

  public move(): void {
    this.moveStrategy.move(this.snakeParts);
  }
}