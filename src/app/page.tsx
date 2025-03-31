import { HydrateClient } from "~/trpc/server";
import MainPage from "./_components/MainPage";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <MainPage />
      </main>
    </HydrateClient>
  );
}
