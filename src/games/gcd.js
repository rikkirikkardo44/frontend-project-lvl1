import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  const biggestNum = num1 < num2 ? num2 : num1;
  const smallestNum = num1 < num2 ? num1 : num2;
  if (biggestNum % smallestNum === 0) {
    return smallestNum;
  }
  let i = smallestNum;
  for (; ; i -= 1) {
    if (biggestNum % i === 0 && smallestNum % i === 0) {
      break;
    }
  }
  return i;
};

const returnsGameData = (firstNum = 1, lastNum = 100) => {
  const number1 = randomNumber(firstNum, lastNum);
  const number2 = randomNumber(firstNum, lastNum);
  const question = `${number1} ${number2}`;
  const answer = greatestDivisor(number1, number2);
  return cons(question, answer);
};

const gcd = () => {
  gameEngine(returnsGameData, gameRule);
};

export default gcd;
