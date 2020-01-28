import { cons, car, cdr } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'What number is missing in the progression?';

const creationProgressionData = (length, startNum, step, index) => {
  let result = '';
  for (let i = 1; i <= length; i += 1) {
    if (i === index) {
      result = `${result} ..`;
    } else {
      result = `${result} ${startNum + (i - 1) * step}`;
    }
  }
  return cons(result, index - 1);
};

const generateGameData = (length = 10) => {
  const startNum = randomNumber(1, 50);
  const step = randomNumber(1, 20);
  const hiddenElementIndex = randomNumber(2, length);
  const unknowNumberData = creationProgressionData(length, startNum, step, hiddenElementIndex);
  const question = car(unknowNumberData);
  const answer = startNum + step * cdr(unknowNumberData);
  return cons(question, String(answer));
};

const startProgressionGame = () => {
  gameEngine(generateGameData, gameRule);
};

export default startProgressionGame;
