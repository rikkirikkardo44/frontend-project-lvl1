import { startGame, calcGame } from '..';

const calculation = (rounds = 3, firstNum = 1, lastNum = 20) => {
  const gameRules = 'What is the result of the expression?';
  startGame(gameRules);
  calcGame(rounds, firstNum, lastNum);
};

export default calculation;
