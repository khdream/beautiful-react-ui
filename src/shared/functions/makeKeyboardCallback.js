import makeCallback from './makeCallback';

const SPACE_BAR = 32;
const ENTER_KEY = 13;

/**
 * This function takes a callbackProp, a possible overrideValue and an array of allowed key codes as parameters
 * and returns a function that, given a React SyntheticEvent, will perform the callbackProp passing the event as
 * first parameter and the possible overrideValue as second parameter only if the pressed key is one of the allowed
 * key codes.
 * The purpose of this function is to generate keyboard callbacks having a similar signatures.
 */
const makeKeyboardCallback = (callbackProp, overrideValue, allowedKeys = [SPACE_BAR, ENTER_KEY]) => (event) => {
  if (event && allowedKeys.includes(event.keyCode)) {
    const callback = makeCallback(callbackProp, overrideValue);
    callback(event);
  }

  return undefined;
};

export default makeKeyboardCallback;
