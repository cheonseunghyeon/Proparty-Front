import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const useUserStore = create(
  subscribeWithSelector((set) => ({
    userObj: null,
    isLoggedIn: false,
    init: false,
    setUserObj: (user) => set({ userObj: user }),
    setIsLoggedIn: (status) => set({ isLoggedIn: status }),
    setInit: (status) => set({ init: status }),
  }))
);
export default useUserStore;
