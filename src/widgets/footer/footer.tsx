import { ThemeToggle } from "@/features/theme-toggle";
import { Container, Logo } from "@/shared/ui";

export const Footer = () => {
  return (
    <footer className="py-6">
      <Container>
        <div className="flex items-center justify-between px-6">
          <Logo />
          <ThemeToggle />
        </div>
      </Container>
    </footer>
  );
};
