import PriceInfo from "@/app/(prices)/PriceInfo";
import PriceGraph from "@/app/(prices)/PriceGraph";
import PriceTable from "@/app/(prices)/PriceTable";

export default function Prices() {
  return (
    <div>
      <PriceInfo />
      <PriceGraph />
      <PriceTable />
    </div>
  );
}
