import { useSession } from "next-auth/react";

import { Box } from "@/shared/ui";

import { EditModal, DeleteModal } from "./modals";
import { type PhoneCardProps } from "./phone-card";

type PhoneActionsProps = PhoneCardProps;

export function PhoneActions({ item }: PhoneActionsProps) {
  const { data } = useSession();
  if (data?.user.role !== "admin") return null;

  return (
    <Box className="flex items-center gap-2">
      <EditModal item={item} />
      <DeleteModal id={item.id} />
    </Box>
  );
}
