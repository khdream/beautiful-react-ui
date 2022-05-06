import { cleanup } from '@testing-library/react';
import CloseIcon from './CloseIcon';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';

describe('CloseIcon component', () => {
  afterEach(cleanup);

  // performs the standard tests
  performStandardTests(CloseIcon);
  // performs a test on default class names
  hasDefaultClassNames(CloseIcon, undefined, ['bi-close-icon']);
});
