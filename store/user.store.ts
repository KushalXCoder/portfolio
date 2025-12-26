import { create } from "zustand";

interface UserState {
    open: boolean;
    setOpen: (val: boolean) => void;
    openSettings: boolean;
    setOpenSettings: (val: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
    open: false,
    setOpen: (val) => set({ open: val }),
    openSettings: false,
    setOpenSettings: (val) => set({ openSettings: val }),
}));