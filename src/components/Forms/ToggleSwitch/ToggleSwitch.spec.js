import { cleanup } from '@testing-library/react';
import ToggleSwitch from './ToggleSwitch';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';

describe('ToggleSwitch component', () => {
  afterEach(cleanup);

  const defaultProps = { value: true };

  // performs the standard tests
  performStandardTests(ToggleSwitch, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(ToggleSwitch, defaultProps, ['bi-toggle', 'bi-toggle-success']);
});
