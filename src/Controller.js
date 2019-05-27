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

export const areDifferents = guess => {
  guess = guess.toString();
  const guessArray = guess.split("");

  const result = guessArray.every((value, index, array) => {
    const arrayWithoutElement = array.slice(index + 1);
    return arrayWithoutElement.includes(value) ? false : true;
  });
  return result;
};

export const areFourDigits = guess => {
  const reg = /^\d+$/;
  guess = guess.toString();
  if (reg.test(guess)) {
    if (guess.length === 4) {
      return true;
    }
  }
  return false;
};
