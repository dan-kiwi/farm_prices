import { store } from "@/store";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  itemVarietiesMaster,
  itemsMaster,
  regionsMaster,
} from "@/types/itemRegionMaster";
import { cookies } from "next/headers";

export default async function PriceInfo() {
  const userPricePreferences = store.getState().userPricePreferences;
  const region = regionsMaster[userPricePreferences.region];
  const variety =
    itemVarietiesMaster[userPricePreferences.item][
      userPricePreferences.variety
    ];

  const supabase = createServerComponentClient({ cookies });
  const currentPriceId =
    userPricePreferences.region * 200 ** 2 +
    userPricePreferences.item * 200 +
    userPricePreferences.variety;
  const { data, error } = await supabase
    .from("prices_current")
    .select("price")
    .eq("region_item_variety", currentPriceId);
  const currentPrice = data ? data[0].price : null;

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-end">
        <h1>
          {variety}, {region}: ${currentPrice ?? "???"}
        </h1>
      </div>
      {/*<Button>Change This</Button>*/}
    </div>
  );
}
