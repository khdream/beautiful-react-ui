import removeUploadAt from './removeUploadAt';

describe('FileUploader \'removeUploadAt\' utility', () => {
  it('should be a function', () => expect(removeUploadAt).to.be.a('function'));
  it('should return a new function', () => expect(removeUploadAt(1)).to.be.a('function'));
  it('the returned function should remove an item from an array at the defined index', () => {
    const removeFirstItem = removeUploadAt(0);
    const array = removeFirstItem([1, 2, 3]);

    expect(array).to.deep.equal([2, 3]);
  });
});
