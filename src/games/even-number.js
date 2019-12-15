import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (firstNum = 1, lastNum = 50) => {
  const question = randomNumber(firstNum, lastNum);
  const answer = (question % 2) === 0 ? 'yes' : 'no';
  return cons(question, answer);
};

const evenNumber = () => {
  gameEngine(isEven, gameRules);
};

export default evenNumber;
