import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenCheck = () => {
  const isEven = (number) => (number % 2) === 0;
  const question = randomNumber(1, 50);
  const answer = isEven(question) === true ? 'yes' : 'no';
  return cons(question, answer);
};

const evenNumber = () => {
  gameEngine(evenCheck, gameRules);
};

export default evenNumber;
