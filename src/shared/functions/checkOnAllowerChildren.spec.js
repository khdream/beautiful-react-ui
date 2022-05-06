import checkOnAllowedChildren from './checkOnAllowedChildren';

describe('checkOnAllowedChildren function utility', () => {
  beforeEach(sinon.restore);

  it('should be a function', () => {
    expect(checkOnAllowedChildren).to.be.a('function');
  });
});
