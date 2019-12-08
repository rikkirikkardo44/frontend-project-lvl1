import {
  greet, name, welcome, isPrimeGame,
} from '..';

const primeNumber = (rounds = 3, maxNumber = 150) => {
  welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  name();
  greet();
  isPrimeGame(rounds, maxNumber);
};

export default primeNumber;
