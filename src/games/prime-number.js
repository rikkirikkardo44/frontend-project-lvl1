import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeCheck = (num) => {
  const isPrime = (num1, num2) => (num1 % num2) === 0;
  for (let i = num - 1; i > 1; i -= 1) {
    if (isPrime(num, i) === true) {
      return 'no';
    }
  }
  return 'yes';
};

const isPrimeQuestion = () => {
  const question = randomNumber(1, 150);
  const answer = primeCheck(question);
  return cons(question, answer);
};

const primeNumber = () => {
  gameEngine(isPrimeQuestion, gameRules);
};

export default primeNumber;
