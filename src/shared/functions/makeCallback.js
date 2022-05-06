/**
 * This function takes a callbackProp and a possible overrideValue as parameters and returns a function
 * that, given a React SyntheticEvent, will perform the callbackProp passing the event as first parameter
 * and the possible overrideValue as second parameter.
 * The purpose of this function is to generate callbacks having a similar signatures.
 *
 * Usage:
 *s
 * ```
 * <SomeComponent onClick={makeCallback(callbackProp)} />
 *
 * // callbackProp will then be performed receiving the SyntheticEvent as first parameter
 * ```
 *
 *
 * Example:
 *
 * ```
 * <Input onChange={makeCallback(onChangeProp)} />
 *
 * // onChangeProp will then be performed receiving the event and the Input value
 * ```
 *
 * It is possible to override the input value by defining the overrideValue:
 *
 * ```
 * <Input onChange={makeCallback(onChangeProp, 10)} />
 *
 * // onChangeProp will then be performed receiving the nativeEvent and 10
 * ```
 */
const makeCallback = (callbackProp, overrideValue) => (event) => {
  if (typeof callbackProp === 'function') {
    const { value } = event.currentTarget;

    return callbackProp(event, overrideValue === undefined ? value : overrideValue);
  }

  return undefined;
};

export default makeCallback;
