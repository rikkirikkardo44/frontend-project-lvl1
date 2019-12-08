import {
  greet, name, welcome, arithmeticProgression, randomNumber,
} from '..';

const progression = (rounds = 3, length = 10) => {
  welcome();
  console.log('What number is missing in the progression?');
  name();
  greet();
  arithmeticProgression(rounds, length);
};

export default progression;
