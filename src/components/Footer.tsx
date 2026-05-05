import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-xl font-bold tracking-tight">
              AILEEN<span className="text-[#b8972e]"> TALENT</span>
            </p>
            <p className="mt-3 text-sm text-stone-400 leading-relaxed max-w-xs">
              Connecting exceptional brand ambassadors, hostesses, and models with world-class brands and events.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-4">Navigation</p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/talent", label: "Our Talent" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-stone-300 hover:text-[#b8972e] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>aileentalent@gmail.com</li>
              <li>+1 (702) 695-7279</li>
              <li>Las Vegas, NV</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Aileen Talent Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-stone-300 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-stone-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
