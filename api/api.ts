import axios from 'axios';
export const axiosSetting = axios.create();
axiosSetting.defaults.baseURL = 'http://52.78.245.43:8080/';
