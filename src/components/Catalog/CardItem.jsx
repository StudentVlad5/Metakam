"use client";
import { Box } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export const CardItem = ({ className, children, uuid, ...props }) => {
  const router = useRouter();
  return (
    <Box
      className={className}
      onClick={() => router.push(`${uuid}`)}
      {...props}
    >
      {children}
    </Box>
  );
};
