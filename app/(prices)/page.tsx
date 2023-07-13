"use client";

import PriceInfo from "@/app/(prices)/PriceInfo";
import PriceGraph from "@/app/(prices)/PriceGraph";
import PriceTable from "@/app/(prices)/PriceTable";

export default function Prices() {
  return (
    <div className="flex flex-row">
      <div className="p-8 border-r-black">
        <PriceInfo />
      </div>
      <div className="p-8">
        <PriceGraph />
        <PriceTable />
      </div>
    </div>
  );
}
