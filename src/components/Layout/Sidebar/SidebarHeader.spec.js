import { cleanup } from '@testing-library/react';
import SidebarHeader from './SidebarHeader';
import noop from '../../../../test/utils/noop';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';
import checkColorProp from '../../../../test/utils/checkColorProp';

describe('SidebarHeader component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  const defaultProps = { isOpen: true, onToggle: noop };

  // performs the standard tests
  performStandardTests(SidebarHeader, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(SidebarHeader, defaultProps, ['bi-sidebar-header', 'sidebar-header-default']);

  // performs a test on a color prop named 'accent'
  checkColorProp(SidebarHeader, defaultProps, {
    colorProp: 'titleColor',
    defaultColor: 'default',
    defaultColorClass: 'sidebar-header-default',
    checkColor: 'info',
    checkColorClass: 'sidebar-header-info',
  });
});
