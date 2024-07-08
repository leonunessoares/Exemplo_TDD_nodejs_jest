const somar = require('../src/somar');

test('deve somar dois números', () => {
  expect(somar(3, 8)).toBe(11);
  expect(somar(5, 5)).toBe(10);  
});
