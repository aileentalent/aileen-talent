import Link from "next/link";

export const metadata = {
  title: "Services | Aileen Talent",
  description: "Brand ambassadors, hostesses, and models for campaigns, corporate events, and luxury experiences in Las Vegas.",
};

const services = [
  {
    id: "brand-ambassadors",
    category: "Brand Ambassadors",
    tagline: "Brand ambassadors are best at creating lasting impressions and driving brand awareness.",
    description:
      "Our brand ambassadors are polished, personable professionals trained to represent your brand with authenticity and enthusiasm. They connect with your target audience, communicate your message, and turn every interaction into a brand experience.",
    whenToBook: "Brand ambassadors are what you need if:",
    bullets: [
      "You want to increase awareness and engagement at your activation or event.",
      "You want to distribute samples, materials, or run on-site promotions.",
      "You want a personable face representing your brand to consumers.",
      "You need consistent, on-message representation across multiple locations.",
    ],
  },
  {
    id: "hostesses",
    category: "Hostesses",
    tagline: "Hostesses are best at creating a welcoming atmosphere and elevating the guest experience.",
    description:
      "Also known as trade show models, promo models, and convention models, our hostesses are trained to draw attendees to your exhibit, manage guest flow, and ensure every visitor feels welcomed and attended to. They are the face of your booth or venue.",
    whenToBook: "Hostesses are what you need if:",
    bullets: [
      "You want to scan the largest amount of badges at your trade show booth.",
      "You want to maximize foot traffic at your exhibit.",
      "You want attendees to receive marketing materials professionally.",
      "You want someone covering your booth while you are away networking.",
    ],
  },
  {
    id: "models",
    category: "Models",
    tagline: "Models are best at bringing your creative vision to life in front of the camera or on the runway.",
    description:
      "Our versatile roster of editorial, commercial, and runway models are experienced in print campaigns, digital content, live fashion productions, and everything in between. We match the right look and skillset to your specific project needs.",
    whenToBook: "Models are what you need if:",
    bullets: [
      "You need talent for a photo shoot, commercial, or digital campaign.",
      "You are producing a runway show, fashion presentation, or lookbook.",
      "You want a specific look, style, or skill set for your creative project.",
      "You need reliable, professional talent who can take direction on set.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#faf8f5] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">What We Offer</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#1c1917] leading-tight">Our Services</h1>
          <p className="mt-4 text-lg text-[#78716c] max-w-2xl">
            We provide elite talent for every occasion — from trade show floors to luxury brand activations.
            Find the right fit for your next event or campaign.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {services.map((service, i) => (
          <div
            key={service.id}
            id={service.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#b8972e] border-b-2 border-[#b8972e] pb-1">
                  {service.category}
                </span>
              </div>
              <p className="text-xl font-semibold text-[#1c1917] mb-4">{service.tagline}</p>
              <p className="text-[#78716c] leading-relaxed mb-8">{service.description}</p>

              <p className="font-semibold text-[#1c1917] mb-3">{service.whenToBook}</p>
              <ul className="space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[#78716c]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b8972e] shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual accent */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square rounded-3xl bg-[#f5edd8] flex flex-col items-center justify-center gap-4 border border-[#e8ddd0]">
                <span className="text-7xl font-black text-[#e8ddd0] select-none">{i + 1}</span>
                <span className="text-[#b8972e] font-semibold tracking-widest uppercase text-sm">
                  {service.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#1c1917] py-20 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Get Started</p>
          <h2 className="text-4xl font-bold text-white">Ready to book talent?</h2>
          <p className="mt-4 text-white/60">
            Tell us about your event or campaign and we'll match you with the perfect talent from our roster.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 bg-[#b8972e] text-white font-semibold rounded-full hover:bg-[#a07c20] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
