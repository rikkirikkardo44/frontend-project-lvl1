import {
  greet, name, welcome, calcGame,
} from '..';

const calculation = (rounds = 3, firstNum = 1, lastNum = 20) => {
  welcome();
  console.log('What is the result of the expression?');
  name();
  greet();
  calcGame(rounds, firstNum, lastNum);
};

export default calculation;
