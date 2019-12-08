import { startGame, isPrimeGame } from '..';

const primeNumber = (rounds = 3, maxNumber = 150) => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(gameRules);
  isPrimeGame(rounds, maxNumber);
};

export default primeNumber;
