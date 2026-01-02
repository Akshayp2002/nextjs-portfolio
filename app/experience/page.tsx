import ProfileCard from "../components/ProfileCard";
import ExperienceSection from "../components/ExperienceSection";
export default function ExperiencePage() {
   return (
       <main className="pt-14">
         <section className="mx-auto max-w-6xl px-4">
           <div className="grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr]">
             <aside className="lg:sticky lg:top-24 lg:self-start">
               <ProfileCard />
             </aside>
   
             {/* SAME component, no animation */}
             <div className="pb-24">
               <ExperienceSection />
             </div>
           </div>
         </section>
       </main>
     );
}