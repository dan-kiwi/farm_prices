"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Card, Title, LineChart } from "@tremor/react";
import { store } from "@/store";
import {
  RegionIndices,
  varietiesMaster,
  regionsMaster,
  ItemIndices,
} from "@/types/itemRegionMaster";
import { useEffect, useState } from "react";
import { Database } from "@/types/supabase";

const chartdata = [
  {
    year: 1970,
    "Feed Wheat, Canterbury": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Feed Wheat, Canterbury": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Feed Wheat, Canterbury": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Feed Wheat, Canterbury": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Feed Wheat, Canterbury": 1.88,
    "Import Growth Rate": 1.67,
  },
  //...
];

const dataFormatter = (number: number) => `$${number.toFixed(0)}`;

type ChartData = {
  monthAndYear: string;
  [key: string]: string | number;
};

export default function PriceGraph() {
  const supabase = createClientComponentClient<Database>();
  const userPricePreferences = store.getState().userPricePreferences;
  const region = regionsMaster[userPricePreferences.region];
  const variety =
    varietiesMaster[userPricePreferences.item][userPricePreferences.variety];

  const chartCategories = [`${variety}, ${region}`];
  const [chartData2, setChartData2] = useState<ChartData[]>([]);
  const [error, setError] = useState<boolean>();
  useEffect(() => {
    const fetchChartData = async () => {
      let { data, error } = await supabase
        .from("prices_summary")
        .select()
        .eq("variety", userPricePreferences.variety)
        .eq("item", userPricePreferences.item)
        .eq("region", userPricePreferences.region);
      if (error || !data || data.length === 0) {
        console.error(error);
      } else {
        console.log("Supabase data: ", data);
        const parsedData: {
          [key: string]: { [key: string]: number };
        } = {};
        data.forEach((x) => {
          const monthAndYear = `${x.month}/${x.year}`;
          if (!parsedData[monthAndYear]) {
            parsedData[monthAndYear] = {};
          }
          const key = `${varietiesMaster[x.item as ItemIndices][x.variety]}, ${
            regionsMaster[x.region as RegionIndices]
          }`;
          parsedData[monthAndYear][key] = x.price;
        });
        console.log("Parsed data: ", parsedData);
        const chartData: ChartData[] = [];
        Object.keys(parsedData).forEach((monthAndYear) => {
          const row: ChartData = { monthAndYear };
          Object.keys(parsedData[monthAndYear]).forEach((variety) => {
            row[variety] = parsedData[monthAndYear][variety];
          });
          chartData.push(row);
        });
        console.log("Chart data: ", chartData);
        setChartData2(chartData);
      }
    };
    fetchChartData();
  }, [
    supabase,
    region,
    variety,
    userPricePreferences.variety,
    userPricePreferences.item,
    userPricePreferences.region,
  ]);
  return (
    <div>
      {/* <Title>Export/Import Growth Rates (1970 to 2021)</Title> */}
      <LineChart
        className="mt-6"
        data={chartData2}
        index="monthAndYear"
        categories={chartCategories}
        colors={["emerald", "gray"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </div>
  );
}
