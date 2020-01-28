import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isWithoutRemainder = (num1, num2) => (num1 % num2) === 0;

const isPrime = (num) => {
  if (num < 0 || num === 1 || num === 0) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (isWithoutRemainder(num, i) === true) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const question = randomNumber(1, 150);
  const answer = (isPrime(question) === true) ? 'yes' : 'no';
  return cons(question, String(answer));
};

const startPrimeNumberGame = () => {
  gameEngine(generateGameData, gameRule);
};

export default startPrimeNumberGame;
