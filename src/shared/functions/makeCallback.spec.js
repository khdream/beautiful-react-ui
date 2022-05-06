import noop from '../../../test/utils/noop';
import makeCallback from './makeCallback';

const syntheticEventMock = {
  nativeEvent: new MouseEvent({}),
  currentTarget: { value: 10 },
  persist: noop,
};

describe('makeCallback function utility', () => {
  afterEach(sinon.restore);

  it('should return a new function', () => {
    expect(makeCallback(noop)).to.be.an.instanceof(Function);
  });

  it('should return a callback returning undefined if no parameters are provided', () => {
    const cb = makeCallback();

    expect(cb()).to.be.undefined;
  });

  it('should return a callback performing the given function', () => {
    const fn = sinon.fake.returns(syntheticEventMock);
    const cb = makeCallback(fn);

    cb(syntheticEventMock);

    expect(fn.calledOnce).to.be.true;
  });

  it('should return a callback receiving the \'event\' and a possible \'value\'', () => {
    const fn = sinon.fake.returns(syntheticEventMock);
    const cb = makeCallback(fn);

    cb(syntheticEventMock);

    expect(fn.args[0][0]).to.equal(syntheticEventMock);
    expect(fn.args[0][1]).to.equal(syntheticEventMock.currentTarget.value);
  });

  it('should possibly overrides the React SyntheticEvent\'s \'value\' with a given one', () => {
    const fn = sinon.fake.returns(syntheticEventMock);
    const override = { foo: 'bar' };
    const cb = makeCallback(fn, override);

    cb(syntheticEventMock);

    expect(fn.args[0][0]).to.equal(syntheticEventMock);
    expect(fn.args[0][1]).to.equal(override);
  });
});
