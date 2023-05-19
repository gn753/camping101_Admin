import { axiosSetting } from 'api/api';
import { atom, selector } from 'recoil';

export const isLoginAtom = atom<boolean>({
  key: 'isLogin',
  default: true,
});

export const postingId = atom<{}>({
  key: 'userData',
  default: '',
});

export const postingIdSelector = selector<{}>({
  key: 'postingId',
  get: async () => {
    const getNum = await axiosSetting.get('/api/member', {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: access_token,
      },
    });
    return getNum.data;
  },
  // },
  // set: ({ set }, newValue) => set(postingId, newValue),
});
