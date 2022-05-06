import PropTypes from 'prop-types';

const SingleValue = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]);

const MultiValue = PropTypes.arrayOf(SingleValue);

/**
 * Defines the value type
 */
export default PropTypes.oneOfType([SingleValue, MultiValue]);
