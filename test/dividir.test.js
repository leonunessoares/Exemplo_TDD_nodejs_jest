const dividir = require('../src/dividir');

test('deve dividir dois números', () => {
  expect(dividir(8, 2)).toBe(4);
  expect(dividir(10, 5)).toBe(2);  
});