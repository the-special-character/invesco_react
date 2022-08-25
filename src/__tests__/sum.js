const add = (a, b) => a + b;

// negative scenarios
// positive scenarios

describe('positive scenario', () => {
  // beforeAll(() => {
  //   console.log('beforeAll');
  // });

  test('should sum two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe('negative scenario', () => {
  // beforeAll(() => {
  //   console.log('beforeAll');
  // });

  test('should sum 3 numbers', () => {
    expect(add(1, 2, 3)).not.toBe(6);
  });
});

// beforeAll(() => {
//   console.log('beforeAll');
// });

// afterAll(() => {
//   console.log('afterAll');
// });

// initialize data
// beforeEach(() => {
//   console.log('beforeEach');
// });

// // clear your data
// afterEach(() => {
//   console.log('afterEach');
// });
