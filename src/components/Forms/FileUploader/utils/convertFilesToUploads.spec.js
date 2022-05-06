import convertFilesToUploads from './convertFilesToUploads';

describe('FileUploader \'convertFilesToUploads\' utility', () => {
  it('should be a function', () => expect(convertFilesToUploads).to.be.a('function'));
  it('should convert an array of files to an array of uploads', () => {
    const uploads = convertFilesToUploads([{ mock: true }]);

    expect(uploads).to.deep.equal([{ file: { mock: true }, byteSent: 0, uploading: false }]);
  });
});
