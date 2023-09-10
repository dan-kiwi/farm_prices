"use client";

import { Group, HoverCard, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export default function PriceInfoIcon() {
  return (
    <Group>
      <HoverCard width={360} shadow="md" radius="md">
        <HoverCard.Target>
          <IconInfoCircle size="1rem" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            This is our estimate price based on our current data. We do not
            guarantee the accuracy of this price.
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
