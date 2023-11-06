import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userTokenState = atom({
  key: 'userTokenState', // unique ID (다른 atoms/selectors을 구별하기 위해서)
  default: '', // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});

// accountname - upload용
export const accountnameState = atom({
  key: 'accountnameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

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

// upload 상태
export const festivalState = atom({
  key: 'festivalState',
  default: [],
});

export const tagsState = atom({
  key: 'tagsState',
  default: [],
});

export const postContentState = atom({
  key: 'postContentState',
  default: '',
});

export const postImageState = atom({
  key: 'postImageState',
  default: [],
});

// Delete;
export const postIdState = atom({
  key: 'postIdState',
  default: '',
});

// Edit;
export const postInfoState = atom({
  key: 'postInfoState',
  default: {},
});

// Search;
export const keywordState = atom({
  key: 'keywordState',
  default: '',
});

export const searchUserResultState = atom({
  key: 'searchUserResultState',
  default: [],
});

export const tagStoreState = atom({
  key: 'tagStoreState',
  default: ['#박재범', '#박재범 타투'],
  effects_UNSTABLE: [persistAtom],
});

export const festivalStoreState = atom({
  key: 'festivalStoreState',
  default: ['감귤 축제', '감귤 많이 먹기 대회'],
  effects_UNSTABLE: [persistAtom],
});

export const searchTagsState = atom({
  key: 'searchTagsState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const searchFestivalState = atom({
  key: 'searchFestivalState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const isEditState = atom({
  key: 'isEditState',
  default: false,
});

export const isLoadingState = atom({
  key: 'isLoadingState',
  default: false,
});
