import "./globals.css";
import RootStyleRegistry from "@/app/emotion";
import { HeaderSimple } from "@/app/headerSimple";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const metadata = {
  title: "Farm Prices NZ",
  description: "A website to view farm prices in New Zealand",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const headers = user
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
      ];

  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <HeaderSimple links={headers} />
          <main className="min-h-screen bg-background flex flex-col items-center pt-8">
            {children}
          </main>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
