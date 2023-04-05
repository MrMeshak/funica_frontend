import { create } from 'zustand';

interface UserStoreState {
  user: {
    id: string;
    firstname: string;
    lastname: string;
    profileImg: string;
  };

  setUser: (user: UserStoreState['user']) => void;
}

export const useUserStore = create<UserStoreState>()((set) => ({
  user: {
    id: '',
    firstname: '',
    lastname: '',
    profileImg: ''
  },

  setUser: (user: UserStoreState['user']) => set((state) => ({ ...state, user }))
}));
