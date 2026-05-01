"use client";

import { useState, useMemo } from "react";
import { talents, CATEGORIES, Talent } from "@/lib/talent-data";
import TalentCard from "./TalentCard";
import HeadshotUploader from "./HeadshotUploader";

export default function TalentRoster() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [roster, setRoster] = useState<Talent[]>(talents);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? roster
        : roster.filter((t) => t.category === activeCategory),
    [roster, activeCategory]
  );

  function handleNewTalent(talent: Talent) {
    setRoster((prev) => [talent, ...prev]);
    setShowUploadModal(false);
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#1a1a2e] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-[#b8972e] hover:text-[#b8972e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-5 py-2 bg-[#b8972e] text-white text-sm font-semibold rounded-full hover:bg-[#a07c20] transition-colors flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Talent
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-gray-400">No talent found in this category.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      )}

      {showUploadModal && (
        <HeadshotUploader
          onClose={() => setShowUploadModal(false)}
          onSave={handleNewTalent}
        />
      )}
    </>
  );
}
