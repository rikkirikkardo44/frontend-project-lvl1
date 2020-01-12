import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (number) => (number % 2) === 0;

const returnsGameData = () => {
  const question = randomNumber(1, 50);
  const answer = isEven(question) === true ? 'yes' : 'no';
  return cons(question, answer);
};

const evenNumber = () => {
  gameEngine(returnsGameData, gameRule);
};

export default evenNumber;
