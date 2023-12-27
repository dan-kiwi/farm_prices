"use client";

import {
  ActionIcon,
  Container,
  createStyles,
  Group,
  rem,
  Text,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    width: "100%",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Text size="sm" color="dimmed">
            Made by dan-kiwi
          </Text>
          <Link href="https://github.com/dan-kiwi">
            <ActionIcon size="lg">
              <IconBrandGithub size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
