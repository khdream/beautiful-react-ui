import getNextUploadsBy from './getNextUploadsBy';

describe('FileUploader \'getNextUploadsBy\' utility', () => {
  it('should be a function', () => expect(getNextUploadsBy).to.be.a('function'));
  it('should return a new function', () => expect(getNextUploadsBy(false)).to.be.a('function'));
  it('should calculate the next uploads from the given parameters', () => {
    const getByMultiple = getNextUploadsBy(true);
    const getNextNextFromFiles = getByMultiple([{ file: { mock: true }, byteSent: 0, uploading: false }]);

    expect(getNextNextFromFiles).to.be.a('function');
    expect(getNextNextFromFiles([{ mock: true }])).to.be.an('array');
  });
});
