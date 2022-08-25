const add = (a, b) => a + b;

test('should sum two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('should sum 3 numbers', () => {
  expect(add(1, 2, 3)).toBe(6);
});
