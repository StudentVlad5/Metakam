import { HeaderComponent } from "@/components/HeaderComponent/HeaderComponent";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <HeaderComponent/>
      <Text>Hello from Radix Themes</Text>
      <Button>Let go</Button>
    </Flex>
  );
}
