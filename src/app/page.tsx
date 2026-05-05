import Link from "next/link";
import Image from "next/image";
import { talents } from "@/lib/talent-data";

const featured = talents.filter((t) => t.featured);

const stats = [
  { value: "200+", label: "Talents Represented" },
  { value: "10+", label: "Years in Business" },
  { value: "1,800+", label: "Successful Bookings" },
  { value: "Las Vegas", label: "Based In" },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Brand Ambassadors",
    description: "Polished, personable professionals who embody your brand values at activations, launches, and experiential campaigns.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Hostesses",
    description: "Gracious, professional hostesses for corporate events, VIP experiences, trade shows, and luxury hospitality.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Models",
    description: "Versatile editorial, commercial, and runway talent for print campaigns, digital content, and live fashion productions.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Event Staffing",
    description: "Complete talent solutions for conventions, product launches, and corporate experiences — tailored to your vision.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: text */}
          <div>
            <p className="text-[#b8972e] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Las Vegas&apos; Premier Talent Agency
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1c1917] leading-[1.05] tracking-tight">
              Where<br />
              <span className="text-[#b8972e]">Exceptional</span><br />
              Talent Thrives
            </h1>
            <p className="mt-6 text-lg text-[#78716c] leading-relaxed max-w-xl">
              Aileen Talent connects elite brand ambassadors, hostesses, and models
              with the brands and events that define memorable experiences.
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
                className="px-8 py-3.5 border border-[#1c1917]/20 text-[#1c1917] font-semibold rounded-full hover:bg-[#1c1917]/5 transition-colors"
              >
                Book Talent
              </Link>
            </div>
          </div>

          {/* Right: photo grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3 h-[580px]">
            <div className="relative rounded-2xl overflow-hidden row-span-2">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=700&fit=crop&crop=face"
                alt="Brand Ambassador"
                fill
                className="object-cover object-top"
                sizes="20vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=340&fit=crop&crop=face"
                alt="Hostess"
                fill
                className="object-cover object-top"
                sizes="20vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=340&fit=crop&crop=face"
                alt="Model"
                fill
                className="object-cover object-top"
                sizes="20vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-3xl font-bold text-[#1c1917]">{value}</dt>
                <dd className="mt-1 text-sm text-[#78716c]">{label}</dd>
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
            <h2 className="text-4xl font-bold text-[#1c1917]">Featured Talent</h2>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2.5 py-0.5 bg-[#b8972e] text-white text-xs font-semibold rounded-full mb-2">
                  {talent.category}
                </span>
                <p className="text-white text-xl font-bold">{talent.name}</p>
                <p className="text-white/70 text-sm mt-0.5">{talent.location}</p>
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
      <section className="bg-[#f5edd8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-2">What We Do</p>
            <h2 className="text-4xl font-bold text-[#1c1917]">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, title, description }) => (
              <div key={title} className="p-6 rounded-2xl bg-white border border-[#e8ddd0] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#f5edd8] flex items-center justify-center text-[#b8972e] mb-4">
                  {icon}
                </div>
                <h3 className="text-[#1c1917] font-semibold mb-2">{title}</h3>
                <p className="text-[#78716c] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Work With Us</p>
          <h2 className="text-4xl font-bold text-[#1c1917]">Ready to find your perfect talent?</h2>
          <p className="mt-4 text-[#78716c]">
            Our experienced agents are here to match you with the ideal brand ambassador, hostess, or model
            for your next event or campaign.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#1c1917] text-white font-semibold rounded-full hover:bg-[#2c2520] transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/talent"
              className="px-8 py-3.5 border border-[#1c1917]/20 text-[#1c1917] font-semibold rounded-full hover:bg-[#1c1917]/5 transition-colors"
            >
              Browse Roster
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
