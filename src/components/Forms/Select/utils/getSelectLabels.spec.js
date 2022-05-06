import getSelectedLabels from './getSelectLabels';
import Pill from '../../../Elements/Pill';

const optionsMock = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
  { label: 'Baz', value: 'baz', disabled: true },
];


describe('getSelectLabels function', () => {
  it('should be a function', () => {
    expect(getSelectedLabels).to.be.a('function');
  });

  it('should return string if multiStyle is equal to string', () => {
    const result = getSelectedLabels(optionsMock, 'string');

    expect(result).to.be.a('string');
    expect(result).to.equal('Foo, Bar, Baz');
  });

  it('should return Badge component if multiStyle is equal to pills', () => {
    const result = getSelectedLabels(optionsMock, 'pills');

    expect(result[0].type).to.equal(Pill);
  });
});
