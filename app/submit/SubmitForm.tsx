"use client";

import {
  Button,
  createStyles,
  Group,
  Loader,
  rem,
  SegmentedControl,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import {
  ItemIndices,
  itemsMaster,
  itemVarietiesMaster,
  RegionIndices,
  regionsMaster,
} from "@/types/itemRegionMaster";
import { DatePickerInput, DateValue } from "@mantine/dates";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

export default function SubmitForm() {
  const { classes } = useStyles();
  const supabase = createClientComponentClient<Database>();
  //TODO - add redux context

  const [formState, setFormState] = useState<
    "editing" | "sending" | "confirmed" | "error"
  >("editing");
  const [regionLocal, setRegionLocal] = useState<RegionIndices>(13);
  const [itemLocal, setItemLocal] = useState<ItemIndices>(0);
  const [varietyLocal, setVarietyLocal] = useState<number>(0);
  const [price, setPrice] = useState<number | undefined>();
  const [businessName, setBusinessName] = useState<string | null>(null);
  const [otherBusinessName, setOtherBusinessName] = useState<string | null>(
    null,
  );
  const [saleDate, setSaleDate] = useState<DateValue>(null);
  const [postCode, setPostCode] = useState<number | null>(null);
  const [farmToFarm, setFarmToFarm] = useState<boolean>(true);
  const [verified, setVerified] = useState<boolean>(false);

  const canSubmit =
    varietyLocal &&
    price &&
    saleDate &&
    postCode &&
    (farmToFarm ||
      (businessName === "Other" && otherBusinessName) ||
      (businessName && businessName !== otherBusinessName));

  const submitForm = async () => {
    // setLoading("sending");
    if (!price || !postCode || !saleDate) return;
    try {
      console.log("submitting");
      await supabase.from("prices_unapproved").insert({
        region: regionLocal,
        item: itemLocal,
        price,
        variety: varietyLocal,
        post_code: postCode,
        farm_to_farm: farmToFarm,
        sale_date: saleDate.toISOString().slice(0, 10),
        verified,
        business_name: farmToFarm
          ? null
          : businessName === "Other"
          ? otherBusinessName
          : businessName,
      });
    } catch (e) {
      setFormState("error");
      console.error(e);
    } finally {
      setFormState("confirmed");
    }
    return;
  };
  const resetForm = () => {
    //TODO fix this
    // setRegionLocal(itemLocationContext.region);
    // setItemLocal(itemLocationContext.item);
    // setVarietyLocal(itemLocationContext.variety);
    setPrice(undefined);
    setBusinessName(null);
    setOtherBusinessName(null);
    setSaleDate(null);
    setPostCode(null);
    setFarmToFarm(true);
    setFormState("editing");
    setVerified(false);
  };

  const agribusinessMaster = [
    "PGG Wrightsons",
    "Farmlands",
    "RuralCo",
    "Champion Milling",
    "Midland Seeds",
    "Other",
  ];

  useEffect(() => {
    if (farmToFarm) {
      setBusinessName(null);
      setOtherBusinessName(null);
    }
  }, [farmToFarm]);

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Submit A Price</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Give back to this website, show your support by submitting your
            sales.
          </Text>
          <Text className={classes.description} mt="sm" mb={30}>
            Your insights are valuable in building a comprehensive pricing
            database. This will ensure the farming community has access to the
            most up to date pricing information.
          </Text>
        </div>
        {formState === "editing" && (
          <form
            className={classes.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <Select
              label="Region"
              data={Object.entries(regionsMaster).map((region) => {
                const [key, regionName] = region;
                return {
                  value: key,
                  label: regionName,
                };
              })}
              value={String(regionLocal)}
              onChange={(value) =>
                setRegionLocal(Number(value) as RegionIndices)
              }
            />
            <Select
              label="Item"
              data={Object.entries(itemsMaster).map((item) => {
                const [key, itemName] = item;
                return {
                  value: key,
                  label: itemName,
                };
              })}
              value={String(itemLocal)}
              onChange={(value) => setItemLocal(Number(value) as ItemIndices)}
            />
            <Select
              data={itemVarietiesMaster[itemLocal].map((variety, index) => {
                return {
                  value: String(index),
                  label: variety,
                };
              })}
              label="Variety"
              value={String(varietyLocal)}
              onChange={(value) => setVarietyLocal(Number(value))}
            />
            <TextInput
              label="Sale Price"
              placeholder="Price per ton"
              type="number"
              onChange={(event) => setPrice(Number(event.target.value))}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
              }}
            />
            <DatePickerInput
              valueFormat="DD/MM/YYYY"
              label="Sale Date"
              placeholder="Date on which sale was agreed"
              onChange={(value) => setSaleDate(value)}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
              }}
            />
            <SegmentedControl
              data={["Farm to Farm", "Farm to AgriBusiness"]}
              onChange={(value) => setFarmToFarm(value === "Farm to Farm")}
              className="mt-3"
            />
            {!farmToFarm && (
              <Select
                label="Business Name"
                data={agribusinessMaster}
                onChange={(value) => setBusinessName(value as string)}
              />
            )}
            {!farmToFarm && businessName === "Other" && (
              <TextInput
                label="Other Business Name"
                placeholder="Business Name"
                // mt="md"
                // classNames={{ input: classes.input, label: classes.inputLabel }}
              />
            )}
            <TextInput
              label="Postcode"
              placeholder="Your farm's postcode"
              type="number"
              onChange={(event) => setPostCode(Number(event.target.value))}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
              }}
            />
            <Group position="right" mt="md">
              <Button color="red" onClick={resetForm}>
                Reset
              </Button>
              <Button
                onClick={submitForm}
                disabled={!canSubmit}
                className={classes.control}
              >
                Submit
              </Button>
            </Group>
          </form>
        )}
        {formState === "sending" && (
          <div className={classes.form}>
            <Title className={classes.title}>Submitting...</Title>
            <Loader size="xl" />
          </div>
        )}
        {formState === "confirmed" && (
          <div className={classes.form}>
            <Title className={classes.title}>Submitted</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Thank you for your submission!
            </Text>
            <Button onClick={resetForm} className={classes.control}>
              Submit Another
            </Button>
          </div>
        )}
        {formState === "error" && (
          <div className={classes.form}>
            <Title className={classes.title}>Error</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Sorry, there was an error submitting your price.
            </Text>
            <Button onClick={resetForm} className={classes.control}>
              Try Again
            </Button>
          </div>
        )}
      </SimpleGrid>
    </div>
  );
}
