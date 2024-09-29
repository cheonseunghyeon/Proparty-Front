import create from "zustand";

const useStore = create((set) => ({
  userObj: null,
  isLoggedIn: false,
  init: false,
  setUserObj: (user) => set({ userObj: user }),
  setIsLoggedIn: (status) => set({ isLoggedIn: status }),
  setInit: (status) => set({ init: status }),
}));

export default useStore;
