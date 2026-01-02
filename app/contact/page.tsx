import ContactSection from "../components/ContactSection";
import ProfileCard from "../components/ProfileCard";

export default function ContactPage() {
  return (
    <main className="pt-14">
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ProfileCard />
          </aside>

          {/* SAME component, no animation */}
          <div className="pb-24" id="page-title" >
            <ContactSection />
          </div>
        </div>
      </section>
    </main>
  );
}
