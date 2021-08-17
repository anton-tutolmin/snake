import { ITypedDrawElement } from "../../interfaces/IDrawElement";
import { Score } from "../../types";

export abstract class GameState {
  private score: Score;

  constructor() {
    this.score = 0;
  }

  public abstract getDrawable(): ITypedDrawElement[];

  public abstract nextState(): void;

  public abstract handleArrowButton(event: KeyboardEvent): void;

  public incrementScore(): void {
    this.score = this.score + 1;
  }
}
