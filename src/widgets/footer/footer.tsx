import { ThemeToggle } from "@/features/theme-toggle";
import { Box, Container, Logo } from "@/shared/ui";

export function Footer() {
  return (
    <Box as="footer" className="py-6">
      <Container>
        <Box className="flex items-center justify-between px-3 md:px-6">
          <Logo />
          <ThemeToggle />
        </Box>
      </Container>
    </Box>
  );
}
