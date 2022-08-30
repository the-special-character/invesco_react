const sum = (a, b) => a + b;

test('should sum two numbers', () => {
  expect(sum(1, 3)).toBe(5);
});
