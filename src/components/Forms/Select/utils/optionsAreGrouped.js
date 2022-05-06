import flow from 'lodash/fp/flow';
import filter from 'lodash/fp/filter';
import isString from 'lodash/fp/isString';

const isValid = ({ length }) => length > 0;

/**
 * Check if a provided array of options is valid.
 */
const isValidOptionsArray = flow(
  filter(({ value, label }) => (value !== undefined && isString(label))),
  isValid,
);

/**
 * Takes an array of item and checks if it's a valid array of options group.
 */
export default flow(
  filter(({ name, options }) => (isString(name) && Array.isArray(options) && isValidOptionsArray(options))),
  isValid,
);
