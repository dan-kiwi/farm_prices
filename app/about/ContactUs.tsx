"use client";

import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
  Title,
  Loader,
} from "@mantine/core";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.md,
      padding: rem(4),
      border: `${rem(2)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,
    },

    description: {
      color: theme.colors[theme.primaryColor][0],
      maxWidth: rem(300),

      [theme.fn.smallerThan("sm")]: {
        maxWidth: "100%",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: `${rem(1)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(280)}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export default function ContactUs() {
  const { classes } = useStyles();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [subject, setSubject] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [formState, setformState] = useState<
    "editing" | "sending" | "confirmed" | "error"
  >("editing");
  const supabase = createClientComponentClient<Database>();
  const canSave = name && email && subject && message;

  const handleSubmit = async () => {
    setformState("sending");
    try {
      await supabase.from("feedback").insert({
        name,
        email,
        subject,
        message,
      });
    } catch (e) {
      setformState("error");
      console.error(e);
    } finally {
      setformState("confirmed");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setformState("editing");
  };

  return (
    <Paper shadow="lg" radius="md">
      <div className={classes.wrapper}>
        {formState === "editing" && (
          <form
            className={classes.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput
                  label="Your name"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
                <TextInput
                  label="Your email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                required
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                minRows={3}
                required
              />

              <Group position="right" mt="md">
                <Button
                  type="submit"
                  className={classes.control}
                  disabled={!canSave}
                  onClick={handleSubmit}
                >
                  Send message
                </Button>
              </Group>
            </div>
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
              Thank you for your feedback! We will get back to you soon.
            </Text>
            <Button onClick={handleReset} className={classes.control}>
              Submit Another
            </Button>
          </div>
        )}
        {formState === "error" && (
          <div className={classes.form}>
            <Title className={classes.title}>Error</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Sorry, there was an error submitting your feedback.
            </Text>
            <Button onClick={handleReset} className={classes.control}>
              Reset
            </Button>
            <Button onClick={handleSubmit} className={classes.control}>
              Try Again
            </Button>
          </div>
        )}
      </div>
    </Paper>
  );
}
