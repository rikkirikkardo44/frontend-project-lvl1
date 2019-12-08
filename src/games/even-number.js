import {
  welcome, name, greet, isEven,
} from '..';

const evenNumber = (rounds = 3, firstNum = 1, lastNum = 50) => {
  welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  name();
  greet();
  isEven(rounds, firstNum, lastNum);
};

export default evenNumber;
