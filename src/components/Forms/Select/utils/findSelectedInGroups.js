import flattenGroupToOptions from './flattenGroupToOptions';
import findOption from './findSelectedOptions';

/**
 * Takes an array of options-group and flatten em to a single array of options, eventually performs the findOption func
 * @param groups
 * @param value
 */
const findSelectedInGroups = (groups, value) => {
  const options = flattenGroupToOptions(groups);

  return findOption(options, value);
};

export default findSelectedInGroups;
