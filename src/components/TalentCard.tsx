import Image from "next/image";
import { Talent } from "@/lib/talent-data";

export default function TalentCard({ talent }: { talent: Talent }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <Image
          src={talent.photoUrl}
          alt={talent.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {talent.featured && (
          <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#b8972e] text-white text-[11px] font-semibold rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold tracking-widest text-[#b8972e] uppercase">{talent.category}</p>
        <h3 className="mt-1 text-lg font-bold text-[#1a1a2e]">{talent.name}</h3>
        <p className="text-sm text-gray-500 mt-0.5 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {talent.location}
        </p>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-2">{talent.bio}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {talent.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
