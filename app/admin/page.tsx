"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Database } from "@/types/supabase";

export default function Admin() {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div>
      <Button>
        <Link href={"/admin/approve"}>Approve Prices</Link>
      </Button>
      <Button color="red" onClick={handleSignOut}>
        Log Out
      </Button>
    </div>
  );
}
