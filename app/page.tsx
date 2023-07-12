import PriceInfo from "@/app/PriceInfo";
import PriceGraph from "@/app/PriceGraph";
import PriceTable from "@/app/PriceTable";

export default function Prices() {
  return (
    <div className="flex flex-row">
      <div className="p-8 border-r-black">
        <PriceInfo />
      </div>
      <div className="p-8">
        <PriceGraph />
        <PriceTable data={[]} />
      </div>
    </div>
  );
}
