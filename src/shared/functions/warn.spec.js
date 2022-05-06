import warn from './warn';

/**
 * Seriously this test is quite stupid.
 */
describe('warn utility function', () => {
  it('should console.warn the message', () => {
    const warnSpy = sinon.spy(console, 'warn');

    warn('Hello!');

    expect(warnSpy.callCount).to.equal(1);
  });
});
