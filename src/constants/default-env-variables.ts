import { name } from '../../package.json';

export enum ENVIRONMENT {
  DEVELOPMENT = 'dev',
  TEST = 'test',
  STAGING = 'stg',
  PRODUCTION = 'prod',
}

export const DEFAULT_ENV_VARIABLES = {
  NAME: name,

  DEV: {
    PORT: 3100,
    NODE_ENV: ENVIRONMENT.DEVELOPMENT,
    MONGODB_URL: '',
    RETRY_ATTEMPTS: 10,
    MAX_POOL_SIZE: 20,
    WRITE_TIMEOUTS: 5000,
  },

  TEST: {
    PORT: 8080,
    NODE_ENV: ENVIRONMENT.DEVELOPMENT,
    MONGODB_URL: '',
  },
};
