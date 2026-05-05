import TalentRoster from "@/components/TalentRoster";

export const metadata = {
  title: "Our Talent | Aileen Talent",
  description: "Browse Aileen Talent's roster of elite brand ambassadors, hostesses, and models based in Las Vegas, NV.",
};

export default function TalentPage() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Our Roster</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1c1917]">Exceptional Talent</h1>
        <p className="mt-3 text-[#78716c] max-w-lg">
          Vetted brand ambassadors, hostesses, and models ready for campaigns, corporate events, and luxury experiences.
        </p>
      </div>
      <TalentRoster />
    </section>
  );
}
