"use client";

import {
  Button,
  Card,
  Paper,
  SegmentedControl,
  Select,
  TextInput,
  Title,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export default function SubmitForm() {
  return (
    <Card withBorder>
      <Card.Section>
        <Title order={1}>Submit a Sale</Title>
      </Card.Section>
      <Card.Section>
        <TextInput label="Sale Price" type="number" required />
        <SegmentedControl data={["Farm to Farm", "Farm to Non Farm"]} />
        <Select
          label="Business Name"
          placeholder="What business did you sell to?"
          data={["PGG Wrightsons", "Midlands Seeds", "RuralCo", "Other"]}
        />
        <TextInput label="Other Business Name" />
        <TextInput label="Other Farm Postcode" type="number" />
        <DatePickerInput
          label="Sale Date"
          placeholder="When day did the sale occur?"
          required
        />
      </Card.Section>
      <Card.Section>
        <Button color="red">
          <span>Reset</span>
        </Button>
        <Button color="blue">
          <span>Submit</span>
        </Button>
      </Card.Section>
    </Card>
  );
}
