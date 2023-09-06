import { ItemIndices, RegionIndices } from "@/types/itemRegionMaster";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserPricePreferences = {
  region: RegionIndices;
  district: number | null;
  item: ItemIndices;
  variety: number;
};

const initalPreferences: UserPricePreferences = {
  region: 13, //Canterbury
  district: null,
  item: 0, //Cereal
  variety: 0, //Feed Wheat
};

const preferencesSlice = createSlice({
  name: "userPricePreferences",
  initialState: initalPreferences,
  reducers: {
    setRegion: (state, action: PayloadAction<RegionIndices>) => {
      state.region = action.payload;
    },
    setDistrict: (state, action: PayloadAction<number | null>) => {
      state.district = action.payload;
    },
    setItem: (state, action: PayloadAction<ItemIndices>) => {
      state.item = action.payload;
    },
    setVariety: (state, action: PayloadAction<number>) => {
      state.variety = action.payload;
    },
  },
});

export const { setRegion, setDistrict, setItem, setVariety } =
  preferencesSlice.actions;
export default preferencesSlice.reducer;
