import { redirect } from "next/navigation";
import RecentPosts from "./components/RecentPosts";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("Authentication");

  if (!authCookie) {
    redirect("/login");
  }

  return (
    <main>
      <RecentPosts />
    </main>
  );
}
