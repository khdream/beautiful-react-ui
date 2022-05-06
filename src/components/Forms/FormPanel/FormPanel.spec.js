import React from 'react';
import { render, cleanup, queryByText } from '@testing-library/react';
import FormPanel from './FormPanel';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';

describe('FormPanel component', () => {
  afterEach(cleanup);

  const defaultProps = {};

  // performs the standard tests
  performStandardTests(FormPanel, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(FormPanel, defaultProps, ['bi-form-panel', 'bi-fp-label-floating']);

  it('shall allow to define a label', () => {
    const { container } = render(<FormPanel label="Foo" />);
    const labelEl = queryByText(container, 'Foo');

    expect(labelEl).to.exist;
    expect(labelEl.classList.contains('bi-fp-label')).to.be.true;
  });
});
