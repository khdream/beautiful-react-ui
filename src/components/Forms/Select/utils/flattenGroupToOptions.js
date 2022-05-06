import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import flatten from 'lodash/fp/flatten';

/**
 * Takes an array of option-groups and returns a single one flattening all the options
 */
export default flow([map(get('options')), flatten]);
