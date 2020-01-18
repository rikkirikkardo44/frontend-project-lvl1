import { cons, car, cdr } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'What number is missing in the progression?';

const creationProgressionData = (length, startNum, step) => {
  let result = '';
  const twoDots = randomNumber(2, length);
  for (let i = 1; i <= length; i += 1) {
    if (i === twoDots) {
      result = `${result} ..`;
    } else {
      result = `${result} ${startNum + (i - 1) * step}`;
    }
  }
  return cons(result, twoDots - 1);
};

const generateGameData = (length = 10) => {
  const startNum = randomNumber(1, 50);
  const step = randomNumber(1, 20);
  const unknowNumberData = creationProgressionData(length, startNum, step);
  const question = car(unknowNumberData);
  const answer = startNum + step * cdr(unknowNumberData);
  return cons(question, String(answer));
};

const progression = () => {
  gameEngine(generateGameData, gameRule);
};

export default progression;
