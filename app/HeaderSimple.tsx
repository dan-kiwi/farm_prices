"use client";

import { useEffect, useState } from "react";
import {
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  rem,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { UserResponse } from "@supabase/supabase-js";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderSimple() {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<UserResponse>();
  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase.auth]);

  const links = true
    ? [
        { link: "/", label: "Prices" },
        { link: "/submit", label: "Submit" },
        { link: "/about", label: "About" },
        { link: "/admin", label: "Admin" },
      ]
    : [
        { link: "/", label: "Prices" },
        { link: "/submit", label: "Submit" },
        { link: "/about", label: "About" },
        { link: "/login", label: "Login" },
      ];
  const pathname = usePathname();
  const [active, setActive] = useState(
    (links.find((link) => link.link === pathname) ?? links[0]).link,
  );
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <Text size="xl" weight={700}>
          PastureMarket Logo
        </Text>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}
