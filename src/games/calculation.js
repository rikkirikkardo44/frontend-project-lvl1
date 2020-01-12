import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'What is the result of the expression?';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const random = randomNumber(1, operators.length - 1);
  return operators[random];
};

const operatorConversion = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    // no default
  }
  return undefined;
};

const returnsGameData = () => {
  const number1 = randomNumber(1, 20);
  const number2 = randomNumber(1, 20);
  const operator = randomOperator();
  const question = number1 + operator + number2;
  const answer = operatorConversion(number1, number2, operator);
  return cons(question, answer);
};

const calculation = () => {
  gameEngine(returnsGameData, gameRule);
};

export default calculation;
