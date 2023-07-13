export const regionsMaster = {
  northland: undefined,
  auckland: undefined,
  waikato: undefined,
  "bay of plenty": undefined,
  bisborne: undefined,
  "hawkes bay": undefined,
  taranaki: undefined,
  "manawatu wanganui": undefined,
  wellington: undefined,
  tasman: undefined,
  nelson: undefined,
  marlborough: undefined,
  "west coast": undefined,
  canterbury: [
    "north canterbury",
    "christchurch",
    "mid canterbury",
    "south canterbury",
  ],
  otago: undefined,
  southland: undefined,
};

export type Region = keyof typeof regionsMaster;

export const itemsMaster = {
  cereal: ["feed wheat", "biscuit wheat", "milling wheat", "barley"],
};

export type Item = keyof typeof itemsMaster;
