import optionIsSelected from './optionIsSelected';


const optionsMock = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
  { label: 'Baz', value: 'baz', disabled: true },
];

describe('optionIsSelected function', () => {
  it('should be a function', () => {
    expect(optionIsSelected).to.be.a('function');
  });

  it('should return true if value is selected', () => {
    const result = optionIsSelected(optionsMock[0], optionsMock[0].value);

    expect(result).to.be.equal(true);
  });
});
