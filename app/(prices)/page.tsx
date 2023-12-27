import PriceInfo from "@/app/(prices)/PriceInfo";
import PriceGraph from "@/app/(prices)/PriceGraph";
import PriceTable from "@/app/(prices)/PriceTable";
import ChangePreferences from "./ChangePreferences";
import PricePictureModal from "@/app/(prices)/PricePictureModal";

export default function Prices() {
  return (
    <>
      <PricePictureModal />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <PriceInfo />
          <ChangePreferences />
        </div>
        <PriceGraph />
        <PriceTable />
    </div>
    </>
  );
}
