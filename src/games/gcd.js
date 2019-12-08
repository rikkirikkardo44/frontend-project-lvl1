import {
  greet, name, welcome, gcdGame,
} from '..';

const gcd = (rounds = 3, firstNum = 1, lastNum = 100) => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  name();
  greet();
  gcdGame(rounds, firstNum, lastNum);
};

export default gcd;
