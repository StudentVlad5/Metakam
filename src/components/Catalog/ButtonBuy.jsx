"use client";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export const ButtonBuy = ({ uuid }) => {
  const router = useRouter();
  return (
    <Button
      className="buyButton"
      radius="large"
      type="button"
      onClick={() => router.push(`/${uuid}`)}
    >
      Buy
    </Button>
  );
};
