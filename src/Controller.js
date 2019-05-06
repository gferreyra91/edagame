export const goods = (guess, correct) => {
  let result = 0;
  guess = guess.toString();
  correct = correct.toString();

  const guessArray = guess.split("");
  const correctArray = correct.split("");
  guessArray.forEach((value, index) => {
    if (value === correctArray[index]) {
      result++;
    }
  });
  return result;
};

export const regulars = (guess, correct) => {
  let result = 0;
  guess = guess.toString();
  correct = correct.toString();

  const guessArray = guess.split("");
  const correctArray = correct.split("");
  guessArray.forEach((guessValue, guessIndex) => {
    correctArray.forEach((correctValue, correctIndex) => {
      if (guessValue === correctValue && guessIndex !== correctIndex) {
        result++;
      }
    });
  });
  return result;
};

export const attempt = (guess, correct) => {
  return `${goods(guess, correct)} bien, ${regulars} regular`;
};
