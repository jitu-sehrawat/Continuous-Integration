const attack = require('./attack');

test('should return damage sentence when called corretly', () => {
  const result = attack('orge', 20, false);

  expect(result).toBe('orge dealt 20 damage!');
});
