import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';
import { isEven } from './even-number';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 0 || num === 1 || num === 0) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (isEven(num, i) === true) {
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

const primeNumber = () => {
  gameEngine(generateGameData, gameRule);
};

export default primeNumber;
