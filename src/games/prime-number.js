import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const isPrimeQuestion = () => {
  const question = randomNumber(1, 150);
  const answer = isPrime(question);
  return cons(question, answer);
};

const primeNumber = () => {
  gameEngine(isPrimeQuestion, gameRules);
};

export default primeNumber;
