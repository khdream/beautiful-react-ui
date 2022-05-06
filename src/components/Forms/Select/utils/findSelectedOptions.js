const findSingleOption = (options, value) => options.find((option) => option.value === value);
const findMultipleOptions = (options, value) => options.filter((option) => value.includes(option.value));

/**
 * The following function takes an array of options an return those matching the given value.
 * As the value may possibly be an array of values, two smaller functions has been used.
 * @param options
 * @param value
 * @returns {*}
 */
const findSelectedOptions = (options, value) => (
  Array.isArray(value)
    ? findMultipleOptions(options, value)
    : findSingleOption(options, value)
);

export default findSelectedOptions;
