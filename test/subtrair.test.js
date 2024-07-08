const subtrair = require('../src/subtrair');

test('deve subtrair dois números', () => {
  expect(subtrair(8, 3)).toBe(5);
  expect(subtrair(5, 5)).toBe(0);  
});