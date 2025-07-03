import { create } from 'zustand';
import secureLocalStorage from 'react-secure-storage';

interface AuthState {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  checkLogin: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (value) => set({ isLoggedIn: value }),
  checkLogin: () => {
    const value = secureLocalStorage.getItem('isUserDataCheck') === 'true';
    set({ isLoggedIn: value });
  },
}));

export default useAuthStore;
