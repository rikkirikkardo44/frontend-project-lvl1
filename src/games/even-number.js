import { cons } from '@hexlet/pairs';
import randomNumber from '..';
import gameEngine from '../engine';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2) === 0;

const generateGameData = () => {
  const question = randomNumber(1, 50);
  const answer = isEven(question) === true ? 'yes' : 'no';
  return cons(question, String(answer));
};

const startEvenNumberGame = () => {
  gameEngine(generateGameData, gameRule);
};

export default startEvenNumberGame;
