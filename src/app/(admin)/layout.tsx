import { redirect } from "next/navigation";

import { getServerAuthSession } from "@/server/auth";
import { Box, Container } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export const metadata = {
  title: "КАЗ им. Горбунова | Административная панель",
  description: "Портал молодых специалистов",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerAuthSession();
  if (session?.user.role !== "admin") redirect("/");

  return (
    <Box className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Container className="flex gap-4">
        <Sidebar />
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
