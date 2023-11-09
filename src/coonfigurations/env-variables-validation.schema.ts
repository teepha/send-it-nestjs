import * as Joi from 'joi';
import { DEFAULT_ENV_VARIABLES, ENVIRONMENT } from 'src/constants';

export const envVariablesValidationSchema: Joi.ObjectSchema = Joi.object({
  NAME: Joi.string().default(DEFAULT_ENV_VARIABLES.NAME),
  NODE_ENV: Joi.string()
    .valid(...Object.values(ENVIRONMENT))
    .default(ENVIRONMENT.DEVELOPMENT),
  PORT: Joi.alternatives().conditional('NODE_ENV', {
    is: ENVIRONMENT.TEST,
    then: Joi.number().default(DEFAULT_ENV_VARIABLES.TEST.PORT),
    otherwise: Joi.number().default(DEFAULT_ENV_VARIABLES.DEV.PORT),
  }),
  MONGODB_URL: Joi.alternatives().conditional('NODE_ENV', {
    is: ENVIRONMENT.TEST,
    then: Joi.string().default(DEFAULT_ENV_VARIABLES.TEST.MONGODB_URL),
    otherwise: Joi.string().default(DEFAULT_ENV_VARIABLES.DEV.MONGODB_URL),
  }),
});
