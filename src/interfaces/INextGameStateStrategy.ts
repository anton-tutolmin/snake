import { GameState } from "../entities/GameState/GameState";

export interface INextGameStateStrategy {
  action(gameState: GameState): void;
}