"use client";

import { useEffect, useState } from "react";
import { createStyles, Table, ScrollArea, rem } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface TableScrollAreaProps {
  data: { name: string; email: string; company: string }[];
}

export default function PriceTable({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const supabase = createClientComponentClient<Database>();

  const rows2 = supabase.from("prices_canterbury").headers;
  const data2 = supabase.from("prices_canterbury").select();

  // const tableHeader = rows2
  const rows = data.map((row) => (
    <tr key={row.name}>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.company}</td>
    </tr>
  ));

  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table miw={700}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
