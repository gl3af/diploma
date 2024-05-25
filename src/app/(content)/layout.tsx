import { redirect } from "next/navigation";

import { Box, Container } from "@/shared/ui";
import { api } from "@/trpc/server";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export default async function ContentLayout({ children }: { children: React.ReactNode }) {
  const userData = await api.auth.getProfile.query();

  if (!userData) redirect("/");

  if (!!userData && !userData.registrationCompleted) redirect("/registration");
  if (!!userData && !userData.verified) redirect("/verification");

  return (
    <Box className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Container className="flex">
        <Sidebar />
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
