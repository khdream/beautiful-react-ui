import getFilesBySelectionType from './getFilesBySelectionType';

describe('FileUploader \'getFilesBySelectionType\' utility', () => {
  it('should be a function', () => expect(getFilesBySelectionType).to.be.a('function'));
  it('should return a new function', () => expect(getFilesBySelectionType(false)).to.be.a('function'));
  it('should covert a FileList to array', () => {
    const result = getFilesBySelectionType(true)([{ file: 1 }, { file: 2 }]);

    expect(result).to.deep.equal([{ file: 1 }, { file: 2 }]);

    const result2 = getFilesBySelectionType(false)([{ file: 1 }, { file: 12 }]);

    expect(result2).to.deep.equal([{ file: 1 }]);
  });
});
