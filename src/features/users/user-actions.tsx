import { useSession } from "next-auth/react";

import { Box } from "@/shared/ui";

import { DeleteUserModal, VerifyUserModal } from "./modals";

export function UserActions({ id, verified }: { id: number; verified: boolean }) {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === "admin";

  if (!isAdmin) return null;

  return (
    <Box className="flex items-center gap-2">
      <VerifyUserModal id={id} verified={verified} />
      <DeleteUserModal id={id} />
    </Box>
  );
}
