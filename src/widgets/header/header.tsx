import { Box, Container, Logo } from "@/shared/ui";
import { SignOut } from "@/features/header";
import { MobileSidebar } from "@/features/sidebar";

export function Header() {
  return (
    <Box as="header" className="w-full">
      <Container className="flex items-center justify-center bg-background/80 py-6">
        <Box className="flex w-full items-center justify-between px-3 md:px-6">
          <Box className="flex items-center gap-3">
            <MobileSidebar />
            <Logo />
          </Box>
          <SignOut />
        </Box>
      </Container>
    </Box>
  );
}
