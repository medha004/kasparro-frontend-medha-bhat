import { create } from "zustand";
import { Brand, ModuleType } from "@/types";
import brandsData from "@/data/brands.json";

interface AppState {
  selectedBrand: Brand | null;
  selectedModule: ModuleType | null;
  brands: Brand[];
  isSidebarOpen: boolean;
  setSelectedBrand: (brand: Brand | null) => void;
  setSelectedModule: (module: ModuleType | null) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedBrand: brandsData[0] as Brand,
  selectedModule: null,
  brands: brandsData as Brand[],
  isSidebarOpen: true,
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  setSelectedModule: (module) => set({ selectedModule: module }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));
