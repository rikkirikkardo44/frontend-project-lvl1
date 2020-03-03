import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const randomOperator = () => {
  const index = randomNumber(0, operators.length - 1);
  return operators[index];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    // no default
  }
  return false;
};

const generateGameData = () => {
  const number1 = randomNumber(1, 20);
  const number2 = randomNumber(1, 20);
  const operator = randomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator);
  return cons(question, String(answer));
};

const startCalculationGame = () => {
  gameEngine(generateGameData, gameRule);
};

export default startCalculationGame;
