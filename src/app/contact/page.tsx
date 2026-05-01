import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Aileen Talent Agency",
  description: "Get in touch to book talent or learn more about our roster.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left panel */}
          <div className="lg:col-span-2">
            <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight">
              Let&apos;s find your perfect talent
            </h1>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Whether you&apos;re casting a film, planning a campaign, or organizing a live event, our agents
              will match you with exactly the right talent.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0e6c8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#b8972e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e]">Email</p>
                  <p className="text-sm text-gray-500">aileentalent@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0e6c8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#b8972e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e]">Phone</p>
                  <p className="text-sm text-gray-500">+1 (702) 695-7279</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0e6c8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#b8972e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e]">Offices</p>
                  <p className="text-sm text-gray-500">Las Vegas, NV</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
