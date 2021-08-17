import { NotImplementedException } from "../../errors/errors";
import { ITypedDrawElement } from "../../interfaces/IDrawElement";
import { GameState } from "./GameState";

export class DefaultGameState extends GameState {
  public nextState() {
    throw NotImplementedException;
  }

  public getDrawable(): ITypedDrawElement[] {
    throw NotImplementedException;
  }

  public handleArrowButton(event: KeyboardEvent) {
    throw NotImplementedException;
  }
}