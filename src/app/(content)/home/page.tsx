import { Content } from "@/layouts";
import { getRoutes } from "@/shared/utils";
import { Greeting } from "@/widgets/home";

export default async function HomePage() {
  const { home } = getRoutes(32);
  const { label, icon } = home;

  return (
    <Content title={label} icon={icon} requiresAuth>
      <Greeting />
    </Content>
  );
}
