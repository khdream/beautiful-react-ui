import getFloaterAbsolutePosition from './getFloaterAbsolutePosition';
import getBottomRightFloater from './getBottomRightFloater';
import getBottomCenterFloater from './getBottomCenterFloater';
import getBottomLeftFloater from './getBottomLeftFloater';
import getTopRightFloater from './getTopRightFloater';
import getRightCenterFloater from './getRightCenterFloater';
import getLeftCenterFloater from './getLeftCenterFloater';


describe('getFloaterAbsolutePosition utility function', () => {
  const el = document.createElement('div');

  it('should be a function', () => {
    expect(getFloaterAbsolutePosition).to.be.a('function');
  });

  it('should possibly return the document absolute position of a given element', () => {
    const result = getFloaterAbsolutePosition(el);

    expect(result).to.be.an('object');
  });

  it('should allow to define the offset and set the full element width', () => {
    const result = getFloaterAbsolutePosition(el, 'bottom-right', 10, true);

    expect(result).to.be.an('object');
  });
});


const makeTestFor = (fn) => () => {
  const boundingRect = {};
  const clientHeight = 10;
  const clientWidth = 10;
  const scrollY = 20;
  const offset = 10;

  it('should be a function', () => {
    expect(fn).to.be.a('function');
  });

  it('should possibly return the document absolute position of a given element', () => {
    const result = fn(boundingRect, clientHeight, clientWidth, scrollY, offset);

    expect(result).to.be.an('object');
  });
};

describe('getBottomRightFloater utility function', makeTestFor(getBottomRightFloater));
describe('getBottomCenterFloater utility function', makeTestFor(getBottomCenterFloater));
describe('getBottomLeftFloater utility function', makeTestFor(getBottomLeftFloater));
describe('getTopRightFloater utility function', makeTestFor(getTopRightFloater));
describe('getRightCenterFloater utility function', makeTestFor(getRightCenterFloater));
describe('getLeftCenterFloater utility function', makeTestFor(getLeftCenterFloater));
