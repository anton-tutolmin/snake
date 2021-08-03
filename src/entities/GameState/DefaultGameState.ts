import { NotImplementedException } from "../../errors/errors";
import { ITypedDrawElement } from "../../interfaces/IDrawElement";
import { GameState } from "./GameState";

export class DefaultGameState extends GameState {
  public action() {
    throw NotImplementedException;
  }

  public getDrawable(): ITypedDrawElement[] {
    throw NotImplementedException;
  }

  public updateOnArrowButton(event: KeyboardEvent) {
    throw NotImplementedException;
  }
}