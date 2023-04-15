import axios from 'axios';
export const axiosSetting = axios.create({
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  // },
});

axiosSetting.defaults.withCredentials = true;

axiosSetting.interceptors.request.use(function (config) {
  const user = localStorage.getItem('jwt');
  if (!user) {
    console.log('토큰 있음');
    config.headers['access_token'] = null;
    config.headers['refresh_token'] = null;
    console.log(config, 'config');
    return config;
  }
  console.log('토큰 없음');
  const { accessToken, refreshToken } = JSON.parse(user);
  config.headers['access_token'] = accessToken;
  config.headers['refresh_token'] = refreshToken;
  console.log(config, 'config');

  return config;
});

axiosSetting.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 403) {
      console.log('실행 리플레쉬');
      try {
        console.log('실행 리플레쉬');
        const originalRequest = error.config;
        const data = await axiosSetting.get('/api/signin/refresh');
        if (data) {
          const { access_Token, refresh_Token } = data.data;
          localStorage.removeItem('jwt');
          localStorage.setItem(
            'jwt',
            JSON.stringify(data.data, ['access_Token', 'refresh_Token'])
          );
          originalRequest.headers['access_token'] = access_Token;
          originalRequest.headers['refresh_token'] = refresh_Token;
          return await axiosSetting.request(originalRequest);
        }
      } catch (error) {
        localStorage.removeItem('jwt');

        console.log(error);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
