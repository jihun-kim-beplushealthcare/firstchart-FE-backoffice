import { create } from "zustand";

interface ITokenStore {
  accesstoken: string | null;
  setAccessToken: (token: string) => void;
  removeAccessToken: () => void;
}

const useTokenStore = create<ITokenStore>((set) => ({
  accesstoken: null,
  setAccessToken: (token: string) => set({ accesstoken: token }),
  removeAccessToken: () => set({ accesstoken: null }),
}));

export default useTokenStore;
