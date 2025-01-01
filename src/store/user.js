import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useUserStore = create(
    persist(
        (set) => ({
            user: { name: "" },

            setUserName: (name) => set(() => ({ user: { name }})),
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useUserStore;