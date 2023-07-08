"use client";

import { createContext } from "react";
import { ItemGroup, Region } from "@/types/regionItem";

type StateType = {
  region: Region;
  district: string | null;
  itemGroup: ItemGroup;
  item: string | null;
};

const initalState: StateType = {
  region: "Canterbury",
  district: null,
  itemGroup: "Cereals",
  item: "Milling Wheat",
};

export const ItemLocationContext = createContext<StateType>(initalState);

export default function ItemLocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ItemLocationContext.Provider value={initalState}>
      {children}
    </ItemLocationContext.Provider>
  );
}
