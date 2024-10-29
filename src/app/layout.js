import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { ButtonUp } from "@/components/ButtonUp/ButtonUp";
import { HeaderComponent } from "@/components/HeaderComponent/HeaderComponent";
import { Flex, Text } from "@radix-ui/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Metakam",
  description: "Metakam testing task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme
          accentColor="crimson"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          <Flex direction="column" gap="2">
            <HeaderComponent />
            {children}
            <Text align={"center"} margin={"auto"}>Footer: Cookes, Vacancies, Help, Services, PartnerShip</Text>
            <ButtonUp />
          </Flex>
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
