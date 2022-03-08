import { atom } from 'recoil';

interface MenuAtom {
  isHamburgerOpen: boolean;
}

export const menuAtom = atom<MenuAtom>({
  key: 'menuAtom',
  default: {
    isHamburgerOpen: false,
  },
});
