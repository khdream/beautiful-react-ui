import PropTypes from 'prop-types';

/**
 * Defines the available type of placement that can possibly be applied to the floating components
 */
export default PropTypes.oneOf([
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'left-center',
  'right-center',
]);
