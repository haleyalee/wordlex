// for (let i = 0; i < guess.length; i++) {
//   let guessLetter = guess.charAt(i);
//   let solutionLetter = solution.charAt(i);
//   if (guessLetter === solutionLetter) {
//     result.push("Green");
//   }
//   else if (solution.indexOf(guessLetter) != -1) {
//     result.push("Yellow");
//   }
//   else {
//     result.push("Grey");
//   }
// }

const solution = ['L', 'I', 'G', 'H', 'T'];
const guess = ['M', 'O', 'I', 'S', 'T'];

const result = [];

guess.forEach((letter, idx) => {
  const solutionLetter = solution[idx];
  if (letter === solutionLetter) {
    result.push('Green');
  } else if (solution.includes(letter)) {
    result.push('Yellow');
  } else {
    result.push('Grey');
  }
});