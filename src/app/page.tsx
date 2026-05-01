import Link from "next/link";
import Image from "next/image";
import { talents } from "@/lib/talent-data";

const featured = talents.filter((t) => t.featured);

const stats = [
  { value: "500+", label: "Talents Represented" },
  { value: "14", label: "Years in Business" },
  { value: "3,200+", label: "Successful Bookings" },
  { value: "40+", label: "Countries" },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    title: "Film & Television",
    description: "Principal and supporting roles for feature films, streaming originals, and broadcast TV.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Commercial & Print",
    description: "High-profile advertising campaigns, editorial shoots, and brand partnerships.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Voice & Audio",
    description: "Narration, animation dubbing, audiobooks, and radio advertising.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Live Events",
    description: "Brand ambassadors, trade show talent, corporate presenters, and event hosts.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a2e]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-[#b8972e] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Premier Talent Representation
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Where<br />
              <span className="text-[#b8972e]">Exceptional</span><br />
              Talent Thrives
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
              Aileen Talent Agency connects world-class actors, models, presenters, and brand ambassadors
              with the opportunities that define careers.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/talent"
                className="px-8 py-3.5 bg-[#b8972e] text-white font-semibold rounded-full hover:bg-[#a07c20] transition-colors"
              >
                View Our Roster
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Book Talent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-3xl font-bold text-[#1a1a2e]">{value}</dt>
                <dd className="mt-1 text-sm text-gray-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Featured Talent */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Spotlight</p>
            <h2 className="text-4xl font-bold text-[#1a1a2e]">Featured Talent</h2>
          </div>
          <Link
            href="/talent"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#b8972e] hover:underline"
          >
            View all talent
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((talent) => (
            <div key={talent.id} className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-100">
              <Image
                src={talent.photoUrl}
                alt={talent.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2.5 py-0.5 bg-[#b8972e] text-white text-xs font-semibold rounded-full mb-2">
                  {talent.category}
                </span>
                <p className="text-white text-xl font-bold">{talent.name}</p>
                <p className="text-gray-300 text-sm mt-0.5">{talent.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/talent" className="text-sm font-medium text-[#b8972e] hover:underline">
            View all talent →
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#1a1a2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-2">What We Do</p>
            <h2 className="text-4xl font-bold text-white">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, title, description }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#b8972e]/20 flex items-center justify-center text-[#b8972e] mb-4">
                  {icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f0e6c8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1a1a2e]">Ready to find your perfect talent?</h2>
          <p className="mt-4 text-gray-600">
            Our team of experienced agents is here to match you with the ideal talent for your next project or campaign.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#2a2a4e] transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/talent"
              className="px-8 py-3.5 border border-[#1a1a2e] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#1a1a2e] hover:text-white transition-colors"
            >
              Browse Roster
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
