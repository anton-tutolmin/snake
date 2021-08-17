import { IDrawable } from "../interfaces/IDrawable";
import { IDrawElement } from "../interfaces/IDrawElement";
import { IFruitDrawElement } from "../interfaces/IFruitDrawElement";

export class Fruit implements IDrawable {
  constructor(private drawElement: IFruitDrawElement) {};

  public getDrawElements(): IFruitDrawElement[] {
    return [this.drawElement];
  }
}