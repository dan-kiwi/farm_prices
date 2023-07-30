import { Item, Region } from "@/types/regionItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ItemLocation = {
  region: Region;
  district: string | null;
  item: Item;
  variety: string | null;
};

const initalItemLocation: ItemLocation = {
  region: "canterbury",
  district: null,
  item: "cereal",
  variety: "milling wheat",
};

const itemLocationSlice = createSlice({
  name: "itemLocation",
  initialState: initalItemLocation,
  reducers: {
    setRegion: (state, action: PayloadAction<Region>) => {
      state.region = action.payload;
    },
    setDistrict: (state, action: PayloadAction<string | null>) => {
      state.district = action.payload;
    },
    setItem: (state, action: PayloadAction<Item>) => {
      state.item = action.payload;
    },
    setVariety: (state, action: PayloadAction<string | null>) => {
      state.variety = action.payload;
    },
  },
});

export const { setRegion, setDistrict, setItem, setVariety } =
  itemLocationSlice.actions;
export default itemLocationSlice.reducer;
