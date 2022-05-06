import getAbsoluteBottom from './getAbsoluteBottom';
import getAbsoluteTop from './getAbsoluteTop';
import getAbsoluteLeft from './getAbsoluteLeft';
import getAbsoluteRight from './getAbsoluteRight';
import getAbsoluteCenter from './getAbsoluteCenter';

const boundingRectMock = {
  left: 0,
  right: 11,
  top: 0,
  bottom: 11,
};

const makeTestsForFirstType = (fn) => () => {
  it('should be a function', () => {
    expect(fn).to.be.a('function');
  });

  it('should return the coordinate', () => {
    const result = fn(10, boundingRectMock, 10, 10);

    expect(result).to.be.a('number');
  });

  it('should return even if the provided bounding rect is not well defined', () => {
    const result = fn(10, {}, 10, 10);

    expect(result).to.be.a('number');
  });
};


const makeTestsForSecondType = (fn) => () => {
  it('should be a function', () => {
    expect(fn).to.be.a('function');
  });

  it('should return the coordinate', () => {
    const result = fn(boundingRectMock, 10);

    expect(result).to.be.a('number');
  });

  it('should return even if the provided bounding rect is not well defined', () => {
    const result = fn({}, 10);

    expect(result).to.be.a('number');
  });
};

describe('getAbsoluteBottom utility', makeTestsForFirstType(getAbsoluteBottom));
describe('getAbsoluteTop utility', makeTestsForFirstType(getAbsoluteTop));
describe('getAbsoluteLeft utility', makeTestsForSecondType(getAbsoluteLeft));
describe('getAbsoluteRight utility', makeTestsForSecondType(getAbsoluteRight));
describe('getAbsoluteCenter utility', makeTestsForSecondType(getAbsoluteCenter));
