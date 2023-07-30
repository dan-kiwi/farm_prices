// import { Button, Group, HoverCard, Text } from "@mantine/core";
import { capitalise } from "@/utils/regex";
// import { IconInfoCircle } from "@tabler/icons-react";
import { store } from "@/store";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default function PriceInfo() {
  const itemLocation = store.getState().itemLocation;
  const supabase = createServerComponentClient({ cookies });
  // const price = supabase.from("prices").select("*").eq("id", 1);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-end">
        <h1>
          {capitalise(itemLocation.variety ?? "")},{" "}
          {capitalise(itemLocation.region ?? "")}: $300
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
