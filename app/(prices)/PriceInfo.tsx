"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { useContext } from "react";
import { ItemLocationContext } from "@/context/itemLocation";
import { Button, Group, HoverCard, Text } from "@mantine/core";
import { capitalise } from "@/utils/regex";
import { IconInfoCircle } from "@tabler/icons-react";

export default function PriceInfo() {
  const supabase = createClientComponentClient<Database>();
  const { itemLocationContext } = useContext(ItemLocationContext);
  const price = supabase
    .from("current_prices")
    .select("price")
    .eq("region", itemLocationContext.region);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-end">
        <h1>
          {capitalise(itemLocationContext.variety ?? "")},{" "}
          {capitalise(itemLocationContext.region ?? "")}: $300
        </h1>
        <div className="mb-2.5">
          <Group>
            <HoverCard width={250} shadow="md">
              <HoverCard.Target>
                <IconInfoCircle size="1rem" />
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  This is our estimate price based on our current data. We do
                  not guarantee the accuracy of this price.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </div>
      </div>
      <Button>Change This</Button>
    </div>
  );
}
