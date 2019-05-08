import _ from 'lodash';

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

  const guessArrayWithNoGoods = guessArray.filter((value, index) => {
    if (value !== correctArray[index]) {
      return value;
    }
  });

  const correctArrayWithNoGoods = correctArray.filter((value, index) => {
    if (value !== guessArray[index]) {
      return value;
    }
  });

  const guessArrayWithNoGoodsWithUniques = _.uniq(guessArrayWithNoGoods);

  guessArrayWithNoGoodsWithUniques.forEach((value, index) => {
    if (correctArrayWithNoGoods.includes(value)) {
      result ++
    }
  })

  return result;
};
