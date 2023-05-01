import axios from 'axios';
export const axiosSetting = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});

axiosSetting.defaults.withCredentials = true;

axiosSetting.interceptors.request.use(function (config) {
  const user: any = localStorage.getItem('jwt');

  if (!user) {
    config.headers.access_token = null;
    config.headers.refresh_token = null;
    return config;
  }
  if (config.data) {
    const { access_token } = JSON.parse(user);
    config.headers.Authorization = access_token;
    return config;
  }
  const { access_token, refresh_token } = JSON.parse(user);
  config.headers.Authorization = access_token;
  config.headers['access_token'] = access_token;
  config.headers['refresh_token'] = refresh_token;

  return config;
});

axiosSetting.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // error.response &&
    // if (error.error.response.status === 401) {
    //   localStorage.removeItem('jwt');
    // }
    if (error.response.status === 403) {
      try {
        const user: any = localStorage.getItem('jwt');
        const originalRequest = error.config;
        const { refresh_token } = JSON.parse(user); //로컬스토리지에 있는 리프레쉬 토큰
        if (!refresh_token) {
          localStorage.removeItem('jwt');
        }
        const data = await axiosSetting.post(
          '/api/signin/refresh',
          refresh_token,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (data) {
          const { access_token } = data.data;
          originalRequest.headers.Authorization = access_token;
          originalRequest.headers['access_token'] = access_token;
          // originalRequest.headers['Content-Type'] = 'application/json';
          const jwtData = {
            access_token: access_token,
          };
          localStorage.setItem('jwt', JSON.stringify(jwtData));
          return await axiosSetting.request(originalRequest);
        }
      } catch (error) {
        console.log('실행 리플레쉬 실패함요');
      }
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
