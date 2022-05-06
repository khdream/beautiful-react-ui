import flattenGroupToOptions from './flattenGroupToOptions';

const optionsGroup = [{
  name: 'foo',
  options: [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz', disabled: true },
  ],
}];

describe('filterOptions function', () => {
  it('should be a function', () => {
    expect(flattenGroupToOptions).to.be.a('function');
  });

  it('should return a flattered array', () => {
    const result = flattenGroupToOptions(optionsGroup);
    const expectedResult = result[0];

    expect(expectedResult).to.be.equal(optionsGroup[0].options[0]);
  });
});
