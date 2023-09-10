"use client";

import { Button, Group, Modal, ScrollArea, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { store } from "@/store";
import {
  ItemIndices,
  RegionIndices,
  itemsMaster,
  regionsMaster,
  varietiesMaster,
} from "@/types/itemRegionMaster";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ChangePreferences() {
  const [opened, { open, close }] = useDisclosure();
  const router = useRouter();
  const userPricePreferences = store.getState().userPricePreferences;
  const [regionLocal, setRegionLocal] = useState<RegionIndices | null>(
    userPricePreferences.region,
  );
  const [itemLocal, setItemLocal] = useState<ItemIndices | null>(
    userPricePreferences.item,
  );
  const [varietyLocal, setVarietyLocal] = useState<number | null>(
    userPricePreferences.variety,
  );
  const updatePreferences = () => {
    store.dispatch({
      type: "UPDATE_USER_PRICE_PREFERENCES",
      payload: {
        region: regionLocal,
        item: itemLocal,
        variety: varietyLocal,
      },
    });
    console.log("updatePreferences", regionLocal, itemLocal, varietyLocal);
    close();
    router.replace("/");
  };
  const notUpdated =
    itemLocal === userPricePreferences.item &&
    regionLocal === userPricePreferences.region &&
    varietyLocal === userPricePreferences.variety;

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Change Preferences"
        centered
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Select
          label="Region"
          value={String(regionLocal)}
          data={Object.entries(regionsMaster).map(([key, value]) => ({
            value: key,
            label: value,
          }))}
          onChange={(event) => {
            setRegionLocal(
              event == null ? null : (Number(event) as RegionIndices),
            );
          }}
        />
        <Select
          label="Item"
          value={String(itemLocal)}
          data={Object.entries(itemsMaster).map(([key, value]) => ({
            value: key,
            label: value,
          }))}
          onChange={(event) => {
            if (event != itemLocal) {
              setVarietyLocal(null);
              setItemLocal(
                event == null ? null : (Number(event) as ItemIndices),
              );
            }
          }}
          mt="md"
        />
        <Select
          label="Variety"
          value={String(varietyLocal)}
          data={
            itemLocal == null
              ? []
              : varietiesMaster[itemLocal].map((value, key) => ({
                  value: String(key),
                  label: value,
                }))
          }
          onChange={(event) => {
            setVarietyLocal(
              event == null ? event : (Number(event) as ItemIndices),
            );
          }}
          mt="md"
        />
        <Group position="right" mt="xl">
          <Button onClick={close} color="red">
            Cancel
          </Button>
          <Button onClick={updatePreferences} disabled={notUpdated}>
            Update
          </Button>
        </Group>
      </Modal>
      <Button onClick={open}>Change Preferences</Button>
    </>
  );
}
