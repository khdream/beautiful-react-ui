import optionsAreGrouped from './optionsAreGrouped';

const optionsMock = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
  { label: 'Baz', value: 'baz', disabled: true },
];

const optionsGroup = [{
  name: 'foo',
  options: [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz', disabled: true },
  ],
}];


describe('optionsAreGrouped function', () => {
  it('should be a function', () => {
    expect(optionsAreGrouped).to.be.a('function');
  });

  it('should return true if the provided array is valid', () => {
    const result = optionsAreGrouped(optionsGroup);

    expect(result).to.be.equal(true);
  });

  it('should return false if the provided array is not valid', () => {
    const result = optionsAreGrouped(optionsMock);

    expect(result).to.be.equal(false);
  });
});
