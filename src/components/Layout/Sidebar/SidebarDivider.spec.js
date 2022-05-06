import { cleanup } from '@testing-library/react';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';
import SidebarDivider from './SidebarDivider';

describe('SidebarDivider component', () => {
  afterEach(cleanup);

  // performs the standard tests
  performStandardTests(SidebarDivider);
  // performs a test on default class names
  hasDefaultClassNames(SidebarDivider, undefined, ['bi-sidebar-divider']);
});
