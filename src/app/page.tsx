import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options";
import SignoutButton from "./components/SignOutButton";
import HomePage from "./components/HomePage";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="h-full">
      <HomePage />
      <div className="container">
        <div className="px-10 lg:px-80">
          <h1 className="text-4xl">Hi {session?.user?.name}</h1>
          {JSON.stringify(session)}
        </div>
      </div>
      <SignoutButton />
    </main>
  );
}