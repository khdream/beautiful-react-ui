import { makeCallback, makeKeyboardCallback } from '../../../shared';

/**
 * Get checkbox props...
 * TODO: better documentation
 * @param checkbox
 * @param onChange
 * @param value
 * @returns {*}
 */
const getCheckboxFurtherProps = (checkbox, onChange, value) => (!checkbox ? {} : {
  onClick: makeCallback(onChange, !value),
  onKeyUp: makeKeyboardCallback(onChange, !value),
  role: 'button',
  tabIndex: 0,
});

export default getCheckboxFurtherProps;
