"use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Card, Title, LineChart } from "@tremor/react";
// import { store } from "@/store";
import {
  itemVarietiesMaster,
  itemsMaster,
  regionsMaster,
} from "@/types/itemRegionMaster";
import { useEffect, useState } from "react";

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

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

type ChartData = {
  monthAndYear: string;
  [key: string]: string | number;
};

export default function PriceGraph() {
  // const supabase = createClientComponentClient();
  // const userPricePreferences = store.getState().userPricePreferences;
  const region = 0; //regionsMaster[userPricePreferences.region];
  const variety = 0;
  // itemVarietiesMaster[userPricePreferences.item][
  //   userPricePreferences.variety
  // ];

  const chartCategories = [`${variety}, ${region}`];
  const [chartData2, setChartData2] = useState<ChartData[]>();
  const [error, setError] = useState<boolean>();
  // useEffect(() => {
  //   const fetchChartData = async () => {
  //     let { data, error } = await supabase
  //       .from("prices_summary")
  //       .select()
  //       .eq("variety", userPricePreferences.variety)
  //       .eq("item", userPricePreferences.item)
  //       .eq("region", userPricePreferences.region);
  //     if (error || !data || data.length === 0) {
  //       console.error(error);
  //     } else {
  //       console.log(data);
  //     }
  //   };
  //   fetchChartData();
  // }, [
  //   supabase,
  //   region,
  //   variety,
  //   userPricePreferences.variety,
  //   userPricePreferences.item,
  //   userPricePreferences.region,
  // ]);
  return (
    <div>
      {/* <Title>Export/Import Growth Rates (1970 to 2021)</Title> */}
      <LineChart
        className="mt-6"
        data={chartdata}
        index="year"
        categories={chartCategories}
        colors={["emerald", "gray"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </div>
  );
}
