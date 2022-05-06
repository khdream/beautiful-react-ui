import { cleanup } from '@testing-library/react';
import SidebarLink from './SidebarLink';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';

describe('SidebarLink component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  const defaultProps = { to: '/foo' };

  performStandardTests(SidebarLink, defaultProps);
  hasDefaultClassNames(SidebarLink, defaultProps, ['bi-link']);
});
