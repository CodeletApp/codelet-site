import dotenv from "dotenv";
dotenv.config();

/**
 * @description
 * get URL accordingly to the specified environment in env variables
 * @return
 * returns a string representation of the env url
 *
 */

export function getEnvUrl() {
  return process.env.API_BASE_URL;
}
