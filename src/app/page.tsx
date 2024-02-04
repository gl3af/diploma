import { AuthDialog } from "@/widgets/auth";
import { getServerAuthSession } from "@/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">
        {session ? "Привет Диплом (auth)" : "Привет Диплом"}
      </h1>
      <AuthDialog session={session} />
    </main>
  );
}
