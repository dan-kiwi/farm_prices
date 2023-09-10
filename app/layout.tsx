import "./globals.css";
import RootStyleRegistry from "@/context/emotion";
import { HeaderSimple } from "@/app/HeaderSimple";
import Footer from "@/app/Footer";

export const metadata = {
  title: "Farm Prices NZ",
  description: "A website to view farm prices in New Zealand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <HeaderSimple />
          <main className="min-h-screen bg-background flex flex-col items-center pt-8 pl-4 pr-4 pb-10 max-w-[60rem] ml-auto mr-auto">
            {children}
          </main>
          <Footer />
        </RootStyleRegistry>
      </body>
    </html>
  );
}
