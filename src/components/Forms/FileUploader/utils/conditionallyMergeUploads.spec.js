import conditionallyMergeUploads from './conditionallyMergeUploads';

describe('FileUploader \'conditionallyMergeUploads\' utility', () => {
  it('should be a function', () => expect(conditionallyMergeUploads).to.be.a('function'));
  it('should return a new function', () => expect(conditionallyMergeUploads(false)).to.be.a('function'));
  it('should conditionally merge the received arrays', () => {
    const result = conditionallyMergeUploads(true)([{ file: 1 }])([{ file: 2 }]);

    expect(result).to.deep.equal([{ file: 1 }, { file: 2 }]);
  });
});
