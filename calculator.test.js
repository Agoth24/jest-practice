import { calculator } from "./calculator";

test("check addition", () => {
  expect(calculator.add(29, 3)).toBe(32);
});

test("check subtraction", () => {
  expect(calculator.subtract(29, 5)).toBe(24);
});
test("check multiplication", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});
test("check division", () => {
  expect(calculator.divide(50, 5)).toBe(10);
});
