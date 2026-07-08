import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PortalShell } from "@/components/portal-shell";

export const metadata = {
  title: "Patient portal — Amino",
  description:
    "Preview of the Amino patient portal: schedule, journal, and blood-panel dashboard.",
};

export default function PortalPage() {
  return (
    <main>
      <Nav />
      <section className="pt-28 pb-24 sm:pt-32">
        <div className="container-content">
          <PortalShell />
        </div>
      </section>
      <Footer />
    </main>
  );
}
