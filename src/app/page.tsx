import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-foreground text-white">
      <h1 className="text-5xl font-bold">
        {session ? "Привет Диплом блять" : "Привет Диплом"}
      </h1>
    </main>
  );
}
