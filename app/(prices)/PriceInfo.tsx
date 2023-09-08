// import { Button, Group, HoverCard, Text } from "@mantine/core";
// import { IconInfoCircle } from "@tabler/icons-react";
import { store } from "@/store";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useState, useEffect, useMemo } from "react";
// import {
//   itemVarietiesMaster,
//   itemsMaster,
//   regionsMaster,
// } from "@/types/itemRegionMaster";

export default function PriceInfo() {
  const userPricePreferences = store.getState().userPricePreferences;
  const region = userPricePreferences.region;
  const variety = 0;
  // itemVarietiesMaster[userPricePreferences.item][
  // userPricePreferences.variety
  // ];
  const currentPrice = 0;

  // const supabase = createClientComponentClient();
  // const [currentPrice, setCurrentPrice] = useState<number>(400);
  // const currentPriceId =
  // userPricePreferences.region * 200 ** 2 +
  // userPricePreferences.item * 200 +
  // userPricePreferences.variety;
  // useEffect(() => {
  // const fetchCurrentPrice = async () => {
  // let { data, error } = await supabase
  // .from("prices_current")
  // .select("price")
  // .eq("region_item_variety", currentPriceId);
  // if (error || !data || data.length !== 1) {
  // console.log(error);
  // } else {
  // setCurrentPrice(data[0].price);
  // }
  // };
  // fetchCurrentPrice();
  // }, [supabase, currentPriceId]);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-end">
        <h1>
          {variety}, {region}: ${currentPrice ?? "???"}
        </h1>
        <div className="mb-2.5">
          {/*<Group>*/}
          {/*  <HoverCard width={250} shadow="md">*/}
          {/*    <HoverCard.Target>*/}
          {/*      <IconInfoCircle size="1rem" />*/}
          {/*    </HoverCard.Target>*/}
          {/*    <HoverCard.Dropdown>*/}
          {/*      <Text size="sm">*/}
          {/*        This is our estimate price based on our current data. We do*/}
          {/*        not guarantee the accuracy of this price.*/}
          {/*      </Text>*/}
          {/*    </HoverCard.Dropdown>*/}
          {/*  </HoverCard>*/}
          {/*</Group>*/}
        </div>
      </div>
      {/*<Button>Change This</Button>*/}
    </div>
  );
}
