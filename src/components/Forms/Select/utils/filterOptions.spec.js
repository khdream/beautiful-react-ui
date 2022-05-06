import filterOptions from './filterOptions';


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

describe('filterOptions function', () => {
  it('should be a function', () => {
    expect(filterOptions).to.be.a('function');
  });

  it('should return a the same array if filter is not provided', () => {
    const result = filterOptions(optionsMock);
    expect(result).to.be.equal(optionsMock);
  });

  it('should return filterd array, if filter is provided', () => {
    const result = filterOptions(optionsMock, 'Foo');

    expect(result).to.be.not.equal(optionsMock);

    const expectedResult = [{ label: 'Foo', value: 'foo' }];

    expect(result[0].name).to.be.equal(expectedResult[0].name);
  });

  it('should return filtered array, if filter is provided of array of groups', () => {
    const result = filterOptions(optionsGroup, 'foo', optionsGroup);

    expect(result).to.be.not.equal(optionsGroup);
    const expectedResult = [{
      name: 'foo',
      options: [
        { label: 'Foo', value: 'foo' },
      ],
    }];

    expect(result[0].name).to.be.equal(expectedResult[0].name);
  });
});
