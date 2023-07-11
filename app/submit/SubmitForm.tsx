"use client";

import {
  Button,
  createStyles,
  Group,
  rem,
  SegmentedControl,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { ItemLocationContext } from "@/context/itemLocation";
import { useContext, useEffect, useState } from "react";
import { Item, itemsMaster, Region, regionsMaster } from "@/types/regionItem";

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
  const { itemLocationContext, updateItemLocationContext } =
    useContext(ItemLocationContext);

  const [regionLocal, setRegionLocal] = useState<Region>(
    itemLocationContext.region
  );
  const [itemLocal, setItemLocal] = useState<Item>(itemLocationContext.item);
  const [varietyLocal, setVarietyLocal] = useState<string | null>(
    itemLocationContext.variety
  );
  const [price, setPrice] = useState<number | undefined>();
  const [businessName, setBusinessName] = useState<string | null>(null);
  const [saleDate, setSaleDate] = useState<string | null>(null);
  const [postCode, setPostCode] = useState<number | null>(null);
  const [farmToFarm, setFarmToFarm] = useState<boolean>(true);

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Submit A Pirce</Title>
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
        <div className={classes.form}>
          <Select
            label="Region"
            data={Object.keys(regionsMaster)}
            value={regionLocal}
            onChange={(value) => setRegionLocal(value as Region)}
          />
          <Select
            label="Item"
            data={Object.keys(itemsMaster)}
            value={itemLocal}
            onChange={(value) => setItemLocal(value as Item)}
          />
          <Select
            data={itemsMaster[itemLocal]}
            label="Variety"
            value={varietyLocal}
            onChange={setVarietyLocal}
          />
          <TextInput
            label="Sale Price"
            type="number"
            required
            onChange={(event) => setPrice(Number(event.target.value))}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <SegmentedControl
            data={["Farm to Farm", "Farm to AgriBusiness"]}
            onChange={(value) => setFarmToFarm(value === "Farm to Farm")}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}

// export default function SubmitForm() {
//   return (
//     <Card withBorder>
//       <Card.Section>
//         <Title order={1}>Submit a Sale</Title>
//       </Card.Section>
//       <Card.Section>
//         <TextInput label="Sale Price" type="number" required />
//         <SegmentedControl data={["Farm to Farm", "Farm to AgriBusiness"]} />
//         <Select
//           label="Business Name"
//           placeholder="What business did you sell to?"
//           data={["PGG Wrightsons", "Midlands Seeds", "RuralCo", "Other"]}
//         />
//         <TextInput label="Other Business Name" />
//         <TextInput label="Other Farm Postcode" type="number" />
//         <DatePickerInput
//           label="Sale Date"
//           placeholder="When day did the sale occur?"
//           required
//         />
//       </Card.Section>
//       <Card.Section>
//         <Button color="red">
//           <span>Reset</span>
//         </Button>
//         <Button color="blue">
//           <span>Submit</span>
//         </Button>
//       </Card.Section>
//     </Card>
//   );
// }
