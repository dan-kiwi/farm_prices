"use server";

// import { Button, Group, HoverCard, Text } from "@mantine/core";
// import { IconInfoCircle } from "@tabler/icons-react";
import { store } from "@/store";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { itemVarietiesMaster, regionsMaster } from "@/types/itemRegionMaster";
import { cookies } from "next/headers";
import PriceInfoIcon from "./PriceInfoIcon";
import { Database } from "@/types/supabase";

export default async function PriceInfo() {
  const userPricePreferences = store.getState().userPricePreferences;
  const region = regionsMaster[userPricePreferences.region];
  const variety =
    itemVarietiesMaster[userPricePreferences.item][
      userPricePreferences.variety
    ];
  const currentPriceId =
    userPricePreferences.region * 200 ** 2 +
    userPricePreferences.item * 200 +
    userPricePreferences.variety;
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
    .from("prices_current")
    .select()
    .eq("region_item_variety", currentPriceId);
  const currentPrice = data?.[0].price;

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-end">
        <h1>
          {variety}, {region}: ${currentPrice ?? "???"}
        </h1>
        <div className="mb-2.5">{/* <PriceInfoIcon /> */}</div>
      </div>
      {/*<Button>Change This</Button>*/}
    </div>
  );
}
