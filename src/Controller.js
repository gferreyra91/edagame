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

  const noGoods = removeGoods(guessArray, correctArray);

  correctArray.forEach((correctValue, correctIndex) => {
    noGoods.forEach((noGoodValue, noGoodIndex) => {
      if (correctValue === noGoodValue) {
        result++;
      }
    });
  });
  return result;
};

const removeGoods = (guessArray, correctArray) => {
  const noGoods = guessArray.filter((value, index) => {
    if (value !== correctArray[index]) {
      return value;
    }
  });
  return noGoods;
};
