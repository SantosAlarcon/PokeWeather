import { create } from "zustand";

export const useGlobalStore = create((set) => ({
    ciudad: "",
    cambiarCiudad: (nuevaCiudad: string) => set(() => ({ciudad: nuevaCiudad}))
}))
