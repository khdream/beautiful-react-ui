/* eslint-disable-next-line max-len */
const consoleStyle = process.env.NODE_ENV !== 'test' ? 'background-color: #BE496E; color: white; font-weight: 600' : '';

/**
 * The reason we are wrapping the standard console.log function here, is so that we have just one place where to disable
 * the ESLint rule.
 * @param message
 */
export default (message) => {
  /**
   * Eslint forces the developer to not have any `console` statement, in this case we want to warn the
   * user without throwing an error so it's perfectly safe to disable eslint.
   */
  /* eslint-disable-next-line no-console */
  console.warn('%cbeautiful-react-ui', consoleStyle, ` ${message}`);
};
