/**
 * It runs over an array of options an returns those matching the given filter.
 * The comparison is intentionally not case-sensitive.
 * @param options
 * @param filter
 * @returns {*}
 */
const filterOverOptions = (options, filter) => (
  options.filter((option) => option.label.toLowerCase().includes(filter.toLowerCase()))
);

/**
 * The following function runs over an array of grouped options a returns those having the options matching
 * the given filter
 * @param groups
 * @param filter
 * @returns {*}
 */
const filterOverGroup = (groups, filter) => {
  const filteredGroups = groups.map(({ name, options }) => ({
    name,
    options: filterOverOptions(options, filter),
  }));

  return filteredGroups.filter(({ options }) => options.length > 0);
};

/**
 * The following functions accepts an array of options/option-groups and return an new array of filtered items
 * whom label matches the given filter.
 * If provided array is a group the `hasOptionGroups` should then be set as true.
 * @param items
 * @param filter
 * @param hasOptionGroups
 * @returns {*}
 */
const filterOptions = (items, filter, hasOptionGroups = false) => {
  if (filter === '' || !filter) return items;
  const method = hasOptionGroups ? filterOverGroup : filterOverOptions;

  return method(items, filter);
};

export default filterOptions;
