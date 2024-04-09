import { Box, Title } from "@/shared/ui";

type ContentProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export function AdminContent({ title, icon, children }: ContentProps) {
  return <Box as="main" className="flex w-full flex-col gap-8 p-6">
    <Box className="flex items-center gap-4">
      {icon}
      <Title order={1} className="text-2xl font-bold leading-normal lg:text-3xl">
        {title}
      </Title>
    </Box>
    <Box className="h-full rounded-xl bg-secondary p-4 sm:p-6">{children}</Box>
  </Box>
}
