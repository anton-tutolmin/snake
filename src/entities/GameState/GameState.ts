import { ITypedDrawElement } from "../../interfaces/IDrawElement";
import { Score } from "../../types";

export abstract class GameState {
  private score: Score;

  constructor() {
    this.score = 0;
  }

  public abstract getDrawable(): ITypedDrawElement[];

  public abstract action(): void;

  public abstract updateOnArrowButton(event: KeyboardEvent): void;
}
