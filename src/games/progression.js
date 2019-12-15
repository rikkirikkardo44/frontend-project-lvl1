import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRules = 'What number is missing in the progression?';

const hiddenElement = (length, startNum, step) => {
  let result = '';
  const twoDots = randomNumber(2, length);
  for (let i = 1; i <= length; i += 1) {
    if (i === twoDots) {
      result += ' ..';
    } else {
      result += ` ${startNum + (i - 1) * step}`;
    }
  }
  return result;
};

const arithmeticProgression = (length = 10) => {
  const startNum = randomNumber(1, 50);
  const step = randomNumber(1, 20);
  const question = hiddenElement(length, startNum, step);
  return cons(question, step);
};

const progression = () => {
  gameEngine(arithmeticProgression, gameRules);
};

export default progression;
