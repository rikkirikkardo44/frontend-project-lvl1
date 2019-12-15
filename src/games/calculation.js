import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRules = 'What is the result of the expression?';

const randomOperator = () => {
  const addition = '+';
  const subtraction = '-';
  const multiplication = '*';
  if (randomNumber(1, 3) === 1) {
    return addition;
  }
  if (randomNumber(1, 3) === 2) {
    return subtraction;
  }
  return multiplication;
};

const stringOperatorConversion = (num1, num2, stringOperator) => {
  if (stringOperator === '+') {
    return num1 + num2;
  }
  if (stringOperator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const calcGame = (firstNum = 1, lastNum = 20) => {
  const number1 = randomNumber(firstNum, lastNum);
  const number2 = randomNumber(firstNum, lastNum);
  const operator = randomOperator();
  const question = number1 + operator + number2;
  const answer = stringOperatorConversion(number1, number2, operator);
  return cons(question, answer);
};

const calculation = () => {
  gameEngine(calcGame, gameRules);
};

export default calculation;
