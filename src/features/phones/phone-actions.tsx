import { useSession } from "next-auth/react";
import React from "react";
import { CreateEditModal, DeleteModal } from "./modals";
import { type PhoneCardProps } from "./phone-card";
import { Box } from "@/shared/ui";

type PhoneActionsProps = PhoneCardProps;

export const PhoneActions = ({ item }: PhoneActionsProps) => {
  const { data } = useSession();
  if (data?.user.role !== "admin") return null;

  return (
    <Box className="flex items-center gap-2">
      <CreateEditModal mode="edit" item={item} />
      <DeleteModal id={item.id} />
    </Box>
  );
};
