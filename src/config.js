import axios from 'axios';

const pilonApiBaseUrl = 'https://api.pilon.io/v1';

const axiosInstance = axios.create({
  baseURL: pilonApiBaseUrl,
});

export default {
  pilonApiBaseUrl,
  environmentId: 'e28af7cc-defa-11e8-a120-670e4c1c58e2',
  pilonApi: axiosInstance,
};
