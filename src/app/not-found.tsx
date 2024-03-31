import { Box, Button, Text, Title } from "@/shared/ui";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <Box className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-4">
      <Box className="flex gap-4">
        <Title
          order={1}
          className="border-r-2 border-primary pr-4 text-xl font-bold"
        >
          404
        </Title>
        <Text className="text-xl font-medium">Страница не найдена</Text>
      </Box>
      <Button asChild>
        <Link href="/">На главную</Link>
      </Button>
    </Box>
  );
}
