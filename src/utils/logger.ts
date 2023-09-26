/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

class Logger {
  warn = (...args: Array<any>) => {
    if (__DEV__) {
      console.warn(...args);
    }
  };

  error = (...args: Array<any>) => {
    if (__DEV__) {
      console.error(...args);
    }
  };
}

export const logger = new Logger();
