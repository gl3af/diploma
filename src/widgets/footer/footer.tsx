import { Container, Logo } from "@/shared/ui";
import { Socials } from "@/features/footer";

export const Footer = () => {
  return (
    <footer className="py-6">
      <Container>
        <div className="flex items-center justify-between px-6">
          <Logo />
          <Socials />
        </div>
      </Container>
    </footer>
  );
};
