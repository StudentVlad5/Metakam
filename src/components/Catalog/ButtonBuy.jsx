"use client";
import { Button } from "@radix-ui/themes";
import { redirect } from "next/navigation";

export const ButtonBuy = ({ uuid }) => {
  return (
    <Button
      className="buyButton"
      radius="large"
      type="button"
      onClick={() => redirect(`/${uuid}`)}
    >
      Buy
    </Button>
  );
};
