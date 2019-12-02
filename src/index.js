import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain games!');

let userName;
export const name = () => {
  userName = readlineSync.question('May I have your name? ');
};

export const greet = () => console.log(`Hello, ${userName}!`);

export const reference = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const parityCheck = (count = 3, firstNum = 1, lastNum = 50) => {
  const randomNumber = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  let i = 1;
  for (; i <= count; i += 1) {
    const number = randomNumber(firstNum, lastNum);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if ((number % 2) === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet\`s try again, ${userName}!`);
        break;
      }
    }

    if ((number % 2) !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet\`s try again, ${userName}!`);
        break;
      }
    }
  }
  if (i > count) {
    console.log(`Congratulation, ${userName}!`);
  }
};
