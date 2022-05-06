
import { cleanup } from '@testing-library/react';
import ProgressBar from './ProgressBar';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';
import checkColorProp from '../../../../test/utils/checkColorProp';


describe('ProgressBar component', () => {
  afterEach(cleanup);

  const defaultProps = { completed: 60 };

  // performs the standard tests
  performStandardTests(ProgressBar, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(ProgressBar, defaultProps, ['bi-progress-bar']);
  // check on color prop
  checkColorProp(ProgressBar, defaultProps, {
    colorProp: 'color',
    defaultColor: 'primary',
    defaultColorClass: 'bi-bar-primary',
    checkColor: 'success',
    checkColorClass: 'bi-bar-success',
  });
});
