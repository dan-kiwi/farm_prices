"use client";

import { useContext, useEffect, useState } from "react";
import { createStyles, Table, ScrollArea, rem } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { ItemLocationContext } from "@/context/itemLocation";

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
}));

interface TableScrollAreaProps {
  data: { name: string; email: string; company: string }[];
}

export default function PriceTable({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [data2, setData2] =
    useState<Database["public"]["Tables"]["prices_cereal"]["Row"][]>();
  // const [header, setHeader] = useState<string[]>([]);
  const [error, setError] = useState<boolean>();
  const { itemLocationContext } = useContext(ItemLocationContext);
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
      .then((x) => {
        if (x.error) setError(true);
        else setData2(x.data);
      });
  }, [itemLocationContext.item, supabase]);
  // const tableHeader = rows2
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
          {/*<tr>*/}
          {/*  <th>Name</th>*/}
          {/*  <th>Email</th>*/}
          {/*  <th>Company</th>*/}
          {/*</tr>*/}
          <tr>
            {header.map((col) => {
              return <th key={col.id}>{col.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>{rows2}</tbody>
      </Table>
    </ScrollArea>
  );
}
