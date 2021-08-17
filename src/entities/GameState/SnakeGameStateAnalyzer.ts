import { SnakeGameStatesActions } from "../../constants";
import { nextGameStateStrategies } from "../../strategies/index";
import { NextGameStateStrategies } from "../../types";
import { isCollision, isCoordsIntersect } from "../../utils/guards";
import { Fruit } from "../Fruit";
import { Snake } from "../Snake";

export class SnakeGameStateAnalyzer {
  private nextGameStateStrategies: NextGameStateStrategies;

  constructor() {
    this.nextGameStateStrategies = nextGameStateStrategies;
  }

  public getNextGameStateStrategy(snake: Snake, fruit: Fruit) {
    if (isCollision(snake.getDrawElements())) {
      return this.nextGameStateStrategies[SnakeGameStatesActions.GAMEOVER];
    }
    
    if (isCoordsIntersect(fruit.getDrawElements(), snake.getDrawElements())) {
      return this.nextGameStateStrategies[SnakeGameStatesActions.UP_SCORE];
    }

    return this.nextGameStateStrategies[SnakeGameStatesActions.DEFAULT];
  }
}