import { Game } from "./entities/Game";

function main() {
  const game = new Game();
  game.init();
  game.start();
}

main();