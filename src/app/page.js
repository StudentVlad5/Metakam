import { ButtonUp } from "@/components/ButtonUp/ButtonUp";
import { Catalog } from "@/components/Catalog/Catalog";
import { HeaderComponent } from "@/components/HeaderComponent/HeaderComponent";
import { Flex, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <HeaderComponent />
      <Catalog />
      <Text>Footer: Cookes, Vacancies, Help, Services, PartnerShip</Text>
      <ButtonUp />
    </Flex>
  );
}
