import { startGame, isEven } from '..';

const evenNumber = (rounds = 3, firstNum = 1, lastNum = 50) => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(gameRules);
  isEven(rounds, firstNum, lastNum);
};

export default evenNumber;
