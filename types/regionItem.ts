export const regionsMaster = {
  Northland: undefined,
  Auckland: undefined,
  Waikato: undefined,
  "Bay of Plenty": undefined,
  Gisborne: undefined,
  "Hawkes Bay": undefined,
  Taranaki: undefined,
  "Manawatu Wanganui": undefined,
  Wellington: undefined,
  Tasman: undefined,
  Nelson: undefined,
  Marlborough: undefined,
  "West Coast": undefined,
  Canterbury: [
    "North Canterbury",
    "Christchurch",
    "Mid Canterbury",
    "South Canterbury",
  ],
  Otago: undefined,
  Southland: undefined,
};

export type Region = keyof typeof regionsMaster;

export const itemsMaster = {
  Cereals: ["Feed Wheat", "Biscuit Wheat", "Milling Wheat", "Barley"],
};

export type ItemGroup = keyof typeof itemsMaster;
