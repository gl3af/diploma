import { Box, Container } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export default async function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
