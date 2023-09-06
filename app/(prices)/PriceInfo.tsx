"use client";

// import { Button, Group, HoverCard, Text } from "@mantine/core";
// import { IconInfoCircle } from "@tabler/icons-react";
import { store } from "@/store";
import { cookies } from "next/headers";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useMemo } from "react";
import {
  itemVarietiesMaster,
  itemsMaster,
  regionsMaster,
} from "@/types/itemRegionMaster";

export default function PriceInfo() {
  const userPricePreferences = store.getState().userPricePreferences;
  const supabase = createClientComponentClient();
  // const price = supabase.from("prices_current").select("*").eq("id", 1);
  const variety = useMemo(() => {
    return itemVarietiesMaster[userPricePreferences.item][
      userPricePreferences.variety
    ];
  }, [userPricePreferences.item, userPricePreferences.variety]);
  const region = useMemo(() => {
    return regionsMaster[userPricePreferences.region];
  }, [userPricePreferences.region]);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-end">
        <h1>
          {variety}, {region}: $300
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
