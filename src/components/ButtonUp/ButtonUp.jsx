"use client";
import { Button } from "@radix-ui/themes";

export const ButtonUp = () => {
  return <Button onClick={() => window.scrollTo(0, 0)}>Let go up</Button>;
};
