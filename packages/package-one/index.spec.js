const packageOne = require('.');
describe('test package-one', () => {
  it('Should test package-one', () => {
    const name = 'Jonathan';
    const result = packageOne(name);
    expect(result).toBe(`Hello ${name}, i am package-one`);
  });
});
