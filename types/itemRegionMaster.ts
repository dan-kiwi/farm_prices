export const regionsMaster = {
  0: "Northland",
  1: "Auckland",
  2: "Waikato",
  3: "Bay of Plenty",
  4: "Gisborne",
  5: "Hawke's bay",
  6: "Taranaki",
  7: "Manawatū-Wanganui",
  8: "Wellington",
  9: "Tasman",
  10: "Nelson",
  11: "Marlborough",
  12: "West Coast",
  13: "Canterbury",
  14: "Otago",
  15: "Southland",
} as const;
export type RegionIndices = keyof typeof regionsMaster;

// Master of all supported items, can support up to 100 items
// Highest key value is 199
export const itemsMaster = { 0: "Cereal" } as const;
export type ItemIndices = keyof typeof itemsMaster;

// Master of all supported varieties, can support up to 100 varieties for each item
// Max length of array is 200
export const varietiesMaster = {
  0: ["Feed Wheat", "Biscuit Wheat", "Milling Wheat", "Barley"],
} as const; //Where position in array is the variety id
