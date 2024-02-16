import { Container, Logo } from "@/shared/ui";
import { SignOut } from "@/features/header";
import { MobileSidebar } from "@/features/sidebar";

export const Header = () => {
  return (
    <header className="sticky">
      <Container className="flex items-center justify-center py-6">
        <div className="flex w-full items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="sm:hidden">
              <MobileSidebar />
            </div>
            <Logo />
          </div>
          <SignOut />
        </div>
      </Container>
    </header>
  );
};
