const packageTwo = require('.');
describe('test package-one', () => {
  it('Should test package-one', () => {
    const name = 'Jonathan';
    const result = packageTwo(name);
    expect(result).toBe(`Hello ${name}, i am package-two`);
  });
});
