import findSelectedInGroups from './findSelectedInGroups';


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
    expect(findSelectedInGroups).to.be.a('function');
  });

  it('should return a flattered and filtered array', () => {
    const result = findSelectedInGroups(optionsGroup, 'foo');
    const filteredResult = result.label;

    expect(filteredResult).to.be.equal(optionsGroup[0].options[0].label);
  });
});
