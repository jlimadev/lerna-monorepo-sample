const packageOne = require('.');
describe('test package-one', () => {
  it('Should test package-one', () => {
    const result = packageOne('Jonathan');
    expect(result).toBe(result);
  });
});
