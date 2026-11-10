import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { QuizFlow } from "@/components/quiz-flow";
import { protocols } from "@/data/protocols";

export function generateStaticParams() {
  return protocols.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = protocols.find((x) => x.slug === params.slug);
  return {
    title: p ? `${p.name} intake — Amino` : "Intake — Amino",
    description: p
      ? `Begin the ${p.name} intake. Blood-panel-first, physician-reviewed.`
      : undefined,
  };
}

export default function ProtocolQuizPage({
  params,
}: {
  params: { slug: string };
}) {
  const protocol = protocols.find((p) => p.slug === params.slug);
  if (!protocol) notFound();

  return (
    <main>
      <Nav />
      <section className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div
          aria-hidden
          className={clsx(
            "pointer-events-none absolute -top-32 right-0 h-[380px] w-[380px] rounded-full blur-3xl",
            protocol.accent === "clay" ? "bg-clay/15" : "bg-sage/20"
          )}
        />
        <div className="container-content relative">
          <div className="mx-auto max-w-2xl">
            <Link
              href={`/protocols/${protocol.slug}`}
              className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/55 transition-colors hover:text-charcoal"
            >
              <ArrowLeft size={15} /> Back to {protocol.name}
            </Link>
          </div>
          <QuizFlow protocol={protocol} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
