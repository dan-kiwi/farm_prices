"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { useContext } from "react";
import { ItemLocationContext } from "@/context/itemLocation";
import { Button } from "@mantine/core";

export default function PriceInfo() {
  const supabase = createClientComponentClient<Database>();
  const { itemLocationContext } = useContext(ItemLocationContext);
  const price = supabase
    .from("current_prices")
    .select("price")
    .eq("region", itemLocationContext.region);

  return (
    <>
      <div>
        <h1>$300</h1>
        <h1>Our Estimated Price</h1>
      </div>
      <div>
        <h2>You are currently viewing</h2>
        <h2>Item: {itemLocationContext.item}</h2>
        <h2>Variety: {itemLocationContext.variety}</h2>
        <h2>Region: {itemLocationContext.region}</h2>
        <Button>Change This</Button>
      </div>
    </>
  );
}
