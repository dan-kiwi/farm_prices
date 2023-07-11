"use client";

import React, { useState } from "react";
import { createContext } from "react";
import { Item, Region } from "@/types/regionItem";

type ItemLocation = {
  region: Region;
  district: string | null;
  item: Item;
  variety: string | null;
};

const initialItemLocation: ItemLocation = {
  region: "Canterbury",
  district: null,
  item: "Cereals",
  variety: "Milling Wheat",
};

type ItemLocationContextType = {
  itemLocationContext: ItemLocation;
  updateItemLocationContext: (updatedState: ItemLocation) => void;
};

export const ItemLocationContext = createContext<ItemLocationContextType>({
  itemLocationContext: initialItemLocation,
  updateItemLocationContext: () => {},
});

export default function ItemLocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<ItemLocation>(initialItemLocation);

  const updateContext = (updatedState: ItemLocation) => {
    setState(updatedState);
  };

  return (
    <ItemLocationContext.Provider
      value={{
        itemLocationContext: state,
        updateItemLocationContext: updateContext,
      }}
    >
      {children}
    </ItemLocationContext.Provider>
  );
}
