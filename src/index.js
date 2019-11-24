import readlineSync from 'readline-sync';

export const greet = () => {
   console.log('Welcome to the Brain games!');
   const userName = readlineSync.question('May I have your name? ');
   console.log('Hello, ' + userName + '!');
   };
