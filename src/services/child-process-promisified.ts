import child_process from 'child_process';
import { promisify } from 'util';

export const exec = (cmd: string, options: child_process.ExecOptions = {}) => {
  const execPromisified = promisify(child_process.exec);
  return execPromisified(cmd, { maxBuffer: 100 * 1024 * 1024, ...options });
};

export const execAsCallback = (
  ...args: Parameters<typeof child_process.exec>
) => {
  return child_process.exec(...args);
};
