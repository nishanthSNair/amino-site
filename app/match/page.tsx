import type { Metadata } from "next";
import { MatchFlow } from "@/components/match-flow";

export const metadata: Metadata = { title: "Find your protocol | Amino" };

export default function MatchPage() {
  return (
    <main>
      <MatchFlow />
    </main>
  );
}
