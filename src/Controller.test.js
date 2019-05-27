import { goods, regulars, areDifferents, areFourDigits, searchGoodInPosition } from "./Controller";

it("goods between guess and target", () => {
  expect(goods(1273, 1234)).toEqual(2);
  expect(goods(8564, 1234)).toEqual(1);
  expect(goods(4321, 1234)).toEqual(0);
  expect(goods(1234, 1234)).toEqual(4);
});

it("regulars between guess and target", () => {
  expect(regulars(1273, 1234)).toEqual(1);
  expect(regulars(8564, 1234)).toEqual(0);
  expect(regulars(4321, 1234)).toEqual(4);
  expect(regulars(1234, 1234)).toEqual(0);
});

it("are differents", () => {
  expect(areDifferents(1273)).toEqual(true);
  expect(areDifferents(1111)).toEqual(false);
});

it("is four digits", () => {
  expect(areFourDigits(1273)).toEqual(true);
  expect(areFourDigits(12731)).toEqual(false);
  expect(areFourDigits("1 1273")).toEqual(false);
  expect(areFourDigits("a123")).toEqual(false);
});
