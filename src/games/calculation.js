import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRules = 'What is the result of the expression?';

const randomOperator = () => {
  const operator = ['+', '-', '*'];
  const random = Math.floor(Math.random() * operator.length);
  return operator[random];
};

const stringOperatorConversion = (num1, num2, stringOperator) => {
  switch (stringOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const calcGame = () => {
  const number1 = randomNumber(1, 20);
  const number2 = randomNumber(1, 20);
  const operator = randomOperator();
  const question = number1 + operator + number2;
  const answer = stringOperatorConversion(number1, number2, operator);
  return cons(question, answer);
};

const calculation = () => {
  gameEngine(calcGame, gameRules);
};

export default calculation;
