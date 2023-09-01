import "./globals.css";
import RootStyleRegistry from "@/context/emotion";
import { HeaderSimple } from "@/app/HeaderSimple";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Footer from "@/app/Footer";
import ItemLocationProvider from "@/context/itemLocation";

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
        {link: "/login", label: "Login"},
      ];

  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <ItemLocationProvider>
            <HeaderSimple links={headers} />
            <main className="min-h-screen bg-background flex flex-col items-center p-8 pb-10">
              {children}
            </main>
            <Footer />
          </ItemLocationProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
