import TalentRoster from "@/components/TalentRoster";

export const metadata = {
  title: "Our Talent | Aileen Talent Agency",
  description: "Browse Aileen Talent Agency's roster of world-class actors, models, presenters, and brand ambassadors in Las Vegas.",
};

export default function TalentPage() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Our Roster</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e]">Exceptional Talent</h1>
        <p className="mt-3 text-gray-500 max-w-lg">
          Vetted professionals ready for film, television, commercial, and live event work worldwide.
        </p>
      </div>
      <TalentRoster />
    </section>
  );
}
