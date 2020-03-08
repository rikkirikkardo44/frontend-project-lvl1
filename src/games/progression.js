import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'What number is missing in the progression?';

const makeGameQuestion = (length, startNum, step, index) => {
  let result = '';
  for (let i = 0; i <= length - 1; i += 1) {
    if (i === index) {
      result = `${result} ..`;
    } else {
      result = `${result} ${startNum + i * step}`;
    }
  }
  return result.trim();
};

const generateGameData = (length = 10) => {
  const startNum = randomNumber(1, 50);
  const step = randomNumber(1, 20);
  const hiddenElementIndex = randomNumber(0, length - 1);
  const question = makeGameQuestion(length, startNum, step, hiddenElementIndex);
  const answer = startNum + step * hiddenElementIndex;
  return cons(question, String(answer));
};

const startProgressionGame = () => {
  gameEngine(generateGameData, gameRule);
};

export default startProgressionGame;
