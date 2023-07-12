"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { useContext } from "react";
import { ItemLocationContext } from "@/context/itemLocation";

export default function PriceInfo() {
  const supabase = createClientComponentClient<Database>();
  const { itemLocationContext } = useContext(ItemLocationContext);
  const price = 400;

  return <h2>CurrentPrice</h2>;
}
