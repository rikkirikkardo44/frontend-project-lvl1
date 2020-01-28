import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  const biggestNum = num1 < num2 ? num2 : num1;
  const smallestNum = num1 < num2 ? num1 : num2;
  if (biggestNum % smallestNum === 0) {
    return smallestNum;
  }
  for (let i = smallestNum; ; i -= 1) {
    if (biggestNum % i === 0 && smallestNum % i === 0) {
      return i;
    }
  }
};

const generateGameData = (firstNum = 1, lastNum = 100) => {
  const number1 = randomNumber(firstNum, lastNum);
  const number2 = randomNumber(firstNum, lastNum);
  const question = `${number1} ${number2}`;
  const answer = findGreatestDivisor(number1, number2);
  return cons(question, String(answer));
};

const startGcdGame = () => {
  gameEngine(generateGameData, gameRule);
};

export default startGcdGame;
