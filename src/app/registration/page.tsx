import { redirect } from "next/navigation";

import { Container } from "@/shared/ui";
import { api } from "@/trpc/server";
import { Registration } from "@/widgets/auth";

export default async function RegistrationPage() {
  const userData = await api.auth.getProfile.query();

  if (!!userData && userData.registrationCompleted) redirect("/home");
  if (!!userData && !userData.verified) redirect("/verification");

  return (
    <Container className="min-h-screen">
      <Registration />
    </Container>
  );
}
