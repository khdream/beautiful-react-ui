/**
 * Check if a given option is defined by searching its value within the values array
 * @param option
 * @param values
 */
const optionIsSelected = (option, values) => {
  if (Array.isArray(values)) {
    return values.includes(option.value);
  }

  return option.value === values;
};

export default optionIsSelected;
