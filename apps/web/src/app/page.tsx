import { api } from "~/trpc/server";

// export const runtime = "edge";

export default async function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  const data = await api.post.all();
  console.log("🚀 ~ HomePage ~ data:", data);
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Welcome to the home page</h1>
      </div>
    </main>
  );
}
