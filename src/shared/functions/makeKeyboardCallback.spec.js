import noop from '../../../test/utils/noop';
import makeKeyboardCallback from './makeKeyboardCallback';

const syntheticEventMock = {
  nativeEvent: new MouseEvent({}),
  currentTarget: { value: 10 },
  persist: noop,
  keyCode: 13,
};

describe('makeKeyboardCallback function utility', () => {
  afterEach(sinon.restore);

  it('should return a new function', () => {
    expect(makeKeyboardCallback(noop)).to.be.a('function');
  });

  it('should return a callback returning undefined if no parameters are provided', () => {
    const cb = makeKeyboardCallback();

    expect(cb()).to.be.undefined;
  });

  it('should return a callback performing the given function', () => {
    const fn = sinon.fake.returns(syntheticEventMock);
    const cb = makeKeyboardCallback(fn);

    cb(syntheticEventMock);

    expect(fn.calledOnce).to.be.true;
  });

  it('should return a callback receiving the \'event\' and a possible overridden \'value\'', () => {
    const fn = sinon.fake.returns(syntheticEventMock);
    const cb = makeKeyboardCallback(fn, 10, [13]);

    cb(syntheticEventMock);

    expect(fn.args[0][0]).to.equal(syntheticEventMock);
    expect(fn.args[0][1]).to.equal(10);
  });
});
