import { atom, selector } from 'recoil';

export const isLoginAtom = atom<boolean>({
  key: 'isLogin',
  default: true,
});
