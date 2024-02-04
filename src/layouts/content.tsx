import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

type ContentProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  requiresAuth?: boolean;
};

export const Content = async ({
  title,
  icon,
  children,
  requiresAuth = false,
}: ContentProps) => {
  const session = await getServerAuthSession();
  if (!session && requiresAuth) redirect("/");

  return (
    <main className="flex w-full flex-col gap-8  p-6">
      <div className="flex items-center gap-4">
        {icon}
        <h1 className="text-2xl font-bold leading-normal lg:text-3xl">
          {title}
        </h1>
      </div>
      <div className="h-full rounded-xl bg-secondary p-6">{children}</div>
    </main>
  );
};
