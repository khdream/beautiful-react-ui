import { cleanup } from '@testing-library/react';
import Caret from './Caret';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';

describe('Caret component', () => {
  afterEach(cleanup);

  // performs the standard tests
  performStandardTests(Caret);
  // performs a test on default class names
  hasDefaultClassNames(Caret, undefined, ['bi-caret']);
});
