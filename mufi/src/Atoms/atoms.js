import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userTokenState = atom({
  key: 'userTokenState', // unique ID (다른 atoms/selectors을 구별하기 위해서)
  default: '', // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});

// 로그인 상태
export const userLoginState = atom({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 계정 이름(userId) - joinProfile
export const accountNameState = atom({
  key: 'accountNameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const postMoreState = atom({
  key: 'postMoreState',
  default: false,
});
