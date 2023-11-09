import { DEFAULT_ENV_VARIABLES } from '../constants/default-env-variables';

export const defaultConfiguration = () => ({
  env: process.env.NODE_ENV,
  name: process.env.NAME,
  port: parseInt(process.env.PORT, 10) || DEFAULT_ENV_VARIABLES.DEV.PORT,
  database: {
    mongo: {
      uri: process.env.MONGODB_URL,
      name: DEFAULT_ENV_VARIABLES.NAME,
      retryAttempts: DEFAULT_ENV_VARIABLES.DEV.RETRY_ATTEMPTS,
      maxPoolSize: DEFAULT_ENV_VARIABLES.DEV.MAX_POOL_SIZE,
      wtimeoutMS: DEFAULT_ENV_VARIABLES.DEV.WRITE_TIMEOUTS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
});
