const multiplicar = require('../src/multiplicar');

test('deve multiplicar dois números', () => {
  expect(multiplicar(8, 2)).toBe(16);
  expect(multiplicar(3, 5)).toBe(15);  
});