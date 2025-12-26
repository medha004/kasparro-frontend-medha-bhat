import { create } from "zustand";
import { Brand, ModuleType } from "@/types";
import brandsData from "@/data/brands.json";

interface AppState {
  selectedBrand: Brand | null;
  selectedModule: ModuleType | null;
  brands: Brand[];
  setSelectedBrand: (brand: Brand | null) => void;
  setSelectedModule: (module: ModuleType | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedBrand: brandsData[0] as Brand,
  selectedModule: null,
  brands: brandsData as Brand[],
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  setSelectedModule: (module) => set({ selectedModule: module }),
}));
