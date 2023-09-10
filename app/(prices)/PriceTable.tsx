"use client";

import { useEffect, useState } from "react";
import { createStyles, Table, ScrollArea, rem, Paper } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { store } from "@/store";

type PricesCerealHeader = Array<{
  id: keyof Database["public"]["Tables"]["prices_cereal"]["Row"];
  label: string;
}>;

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

  wrapper: {
    display: "flex",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    borderRadius: theme.radius.lg,
    padding: rem(4),
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
  },
}));

export default function PriceTable() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [data2, setData2] =
    useState<Database["public"]["Tables"]["prices_cereal"]["Row"][]>();
  const [error, setError] = useState<boolean>();
  const userPricePreferences = store.getState().userPricePreferences;
  const supabase = createClientComponentClient<Database>();

  const header: PricesCerealHeader = [
    { id: "sale_date", label: "Sale Date" },
    { id: "price", label: "Price" },
    { id: "post_code", label: "Post Code" },
    { id: "farm_to_farm", label: "Farm to Farm" },
    { id: "business_name", label: "Business Name" },
    { id: "verified", label: "Verified" },
  ];

  useEffect(() => {
    supabase
      .from(`prices_cereal`)
      .select()
      .eq("region", userPricePreferences.region)
      .then((x) => {
        if (x.error) setError(true);
        else setData2(x.data);
      });
  }, [supabase, userPricePreferences.region]);

  const rows2 = data2?.map((row) => {
    return (
      <tr key={row.id}>
        {header.map((x) => {
          switch (x.id) {
            case "price":
              return <td key={`${row.id}_${row[x.id]}`}>${row[x.id]}</td>;
            case "farm_to_farm":
              return <td key="njusdba">{row[x.id] ? "True" : "False"}</td>;
            case "verified":
              return (
                <td key={`${row.id}_${row[x.id]}`}>
                  {row[x.id] ? "True" : "False"}
                </td>
              );
            default:
              return (
                <td key={`${row.id}_${row[x.id]}`}>{row[x.id] ?? "N/A"}</td>
              );
          }
        })}
      </tr>
    );
  });

  return (
    <Paper shadow="md" radius="md" mt="lg">
      <div>
        <ScrollArea
          h={300}
          onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
          <Table miw={700} mt="sm">
            <thead
              className={cx(classes.header, { [classes.scrolled]: scrolled })}
            >
              <tr>
                {header.map((col) => {
                  return <th key={col.id}>{col.label}</th>;
                })}
              </tr>
            </thead>
            <tbody>{rows2}</tbody>
          </Table>
        </ScrollArea>
      </div>
    </Paper>
  );
}
