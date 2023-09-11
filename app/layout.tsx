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
          <div className="flex flex-col min-h-screen">
            <HeaderSimple />
            <main className="bg-background flex flex-col items-center pt-8 pl-4 pr-4 pb-10 mb-auto max-w-[60rem] ml-auto mr-auto w-full">
              {children}
            </main>
            <Footer />
          </div>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
