"use client";

import { Button } from "@mantine/core";
import Link from "next/link";

export default function Admin() {
  const handleLogOut = () => {
    return;
  };

  return (
    <div>
      <Button>
        <Link href="/admin/approve">Approve Prices</Link>
      </Button>
      <Button color="red" onClick={handleLogOut}>
        Log Out
      </Button>
    </div>
  );
}
