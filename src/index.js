import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain games!');

let userName;
export const name = () => {
  userName = readlineSync.question('May I have your name? ');
};

export const greet = () => console.log(`Hello, ${userName}!`);

const randomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const answerCheck = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet\`s try again, ${userName}!`);
  }
};

export const isEven = (rounds, firstNum, lastNum) => {
  let i = 1;
  for (; i <= rounds; i += 1) {
    const number = randomNumber(firstNum, lastNum);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (number % 2) === 0 ? 'yes' : 'no';
    answerCheck(answer, correctAnswer);
    if (answer !== correctAnswer) {
      break;
    }
  }
  if (i > rounds) {
    console.log(`Congratulation, ${userName}!`);
  }
};

const randomOperator = () => {
  const addition = '+';
  const subtraction = '-';
  const multiplication = '*';
  if (randomNumber(1, 3) === 1) {
    return addition;
  }
  if (randomNumber(1, 3) === 2) {
    return subtraction;
  }
  return multiplication;
};

export const calcGame = (rounds, firstNum, lastNum) => {
  const conversion = (num1, num2, operator) => {
    if (operator === '+') {
      return num1 + num2;
    }
    if (operator === '-') {
      return num1 - num2;
    }
    return num1 * num2;
  };
  let i = 1;
  for (; i <= rounds; i += 1) {
    const number1 = randomNumber(firstNum, lastNum);
    const number2 = randomNumber(firstNum, lastNum);
    const operator = randomOperator();
    const example = number1 + operator + number2;
    console.log(`Question: ${example}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = conversion(number1, number2, operator);
    answerCheck(String(answer), String(correctAnswer));
    if (String(answer) !== String(correctAnswer)) {
      break;
    }
  }
  if (i > rounds) {
    console.log(`Congratulation, ${userName}!`);
  }
};

export const gcdGame = (rounds, firstNum, lastNum) => {
  const greatestDivisor = (num1, num2) => {
    if (num1 === num2) {
      return num1;
    }
    const biggestNum = num1 < num2 ? num2 : num1;
    const smallestNum = num1 < num2 ? num1 : num2;
    if (biggestNum % smallestNum === 0) {
      return smallestNum;
    }
    let i = smallestNum;
    for (; ; i -= 1) {
      if (biggestNum % i === 0 && smallestNum % i === 0) {
        break;
      }
    }
    return i;
  };
  let i = 1;
  for (; i <= rounds; i += 1) {
    const number1 = randomNumber(firstNum, lastNum);
    const number2 = randomNumber(firstNum, lastNum);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = greatestDivisor(number1, number2);
    answerCheck(String(answer), String(correctAnswer));
    if (String(answer) !== String(correctAnswer)) {
      break;
    }
    if (i > rounds) {
      console.log(`Congratulation, ${userName}!`);
    }
  }
};
