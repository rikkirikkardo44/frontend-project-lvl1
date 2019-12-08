import { startGame, gcdGame } from '..';

const gcd = (rounds = 3, firstNum = 1, lastNum = 100) => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  startGame(gameRules);
  gcdGame(rounds, firstNum, lastNum);
};

export default gcd;
