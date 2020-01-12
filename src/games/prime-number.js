import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';
import { isEven } from './even-number';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    if (isEven(num, i) === true) {
      return false;
    }
  }
  return true;
};

const returnsGameData = () => {
  const question = randomNumber(1, 150);
  const answer = (isPrime(question) === true) ? 'yes' : 'no';
  return cons(question, answer);
};

const primeNumber = () => {
  gameEngine(returnsGameData, gameRule);
};

export default primeNumber;
