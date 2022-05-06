import flow from 'lodash/fp/flow';
import getFilesBySelectionType from './getFilesBySelectionType';
import convertFilesToUploads from './convertFilesToUploads';
import conditionallyMergeUploads from './conditionallyMergeUploads';

export default (multiple) => (uploads) => flow(
  getFilesBySelectionType(multiple),
  convertFilesToUploads,
  conditionallyMergeUploads(multiple)(uploads),
);
