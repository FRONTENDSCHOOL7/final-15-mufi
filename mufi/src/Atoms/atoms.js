import { atom } from 'recoil'
export const userTokenState = atom({
  key: 'userTokenState', // unique ID (다른 atoms/selectors을 구별하기 위해서)
  default: '', // default value (aka initial value)
});
