import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const round = 3;

const gameEngine = (game, gameRule) => {
  console.log('Welcome to the Brain games!');
  console.log(`${gameRule}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= round; i += 1) {
    const task = game();
    const gameQuestion = car(task);
    const correctAnswer = cdr(task);
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let\`s try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${userName}!`);
};

export default gameEngine;
