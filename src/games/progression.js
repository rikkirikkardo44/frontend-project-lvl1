import { startGame, arithmeticProgression } from '..';

const progression = (rounds = 3, length = 10) => {
  const gameRules = 'What number is missing in the progression?';
  startGame(gameRules);
  arithmeticProgression(rounds, length);
};

export default progression;
