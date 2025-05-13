const logger = {
  log: (...inputs: any[]) => {
    console.log(...inputs);
  },
  info: (...inputs: any[]) => {
    console.log(...inputs);
  },
  error: (...inputs: any[]) => {
    console.error(...inputs);
  },
  warn: (...inputs: any[]) => {
    console.warn(...inputs);
  },
};

export default logger;
