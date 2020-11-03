import request from 'axios';
import { string, any } from 'prop-types';

// this is the structure of requestInfo
// eslint-disable-next-line no-unused-vars
const AxiosConfig = {
  url: string,
  method: string,
  headers: any,
  params: any,
  data: any,
};

/**
 * makes request to api specified in requestInfo
 * @param {AxiosConfig} requestInfo
 * @see https://github.com/axios/axios
 */
export async function apiRequest(requestInfo) {
  try {
    const response = await request({
      ...requestInfo,
      validateStatus: () => true,
    });
    return response;
  } catch (error) {
    throw error;
  }
}
