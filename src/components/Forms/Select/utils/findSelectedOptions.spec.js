import findSelectedOptions from './findSelectedOptions';

const optionsMock = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
  { label: 'Baz', value: 'baz', disabled: true },
];


describe('findSelectedOptions function', () => {
  it('should be a function', () => {
    expect(findSelectedOptions).to.be.a('function');
  });

  it('should return an array of objects containing all the options that match with values into the provided array',
    () => {
      const result = findSelectedOptions(optionsMock, ['foo', 'bar']);

      expect(result).to.be.an('array');
      expect(result[0]).to.be.equal(optionsMock[0]);
      expect(result.length).to.be.equal(2);
    });

  it('should return an object that contains the option that match with the provided value', () => {
    const result = findSelectedOptions(optionsMock, 'baz');

    expect(result).to.be.an('object');
    expect(result.label).to.be.equal('Baz');
  });
});
