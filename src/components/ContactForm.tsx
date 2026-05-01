"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

const PROJECT_TYPES = [
  "Film / TV",
  "Commercial / Print",
  "Live Event",
  "Brand Partnership",
  "Voice / Audio",
  "Other",
];

const BUDGETS = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Prefer not to say",
];

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: PROJECT_TYPES[0],
  budget: BUDGETS[0],
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleField(key: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1a1a2e]">Message received!</h3>
        <p className="mt-2 text-gray-500">We'll be in touch within 1–2 business days.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[#b8972e] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleField("name", e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b8972e]/30 focus:border-[#b8972e] transition-colors"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleField("email", e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b8972e]/30 focus:border-[#b8972e] transition-colors"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company / Production</label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => handleField("company", e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b8972e]/30 focus:border-[#b8972e] transition-colors"
          placeholder="Acme Productions"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Type</label>
          <select
            value={form.projectType}
            onChange={(e) => handleField("projectType", e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b8972e]/30 focus:border-[#b8972e] bg-white transition-colors"
          >
            {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget Range</label>
          <select
            value={form.budget}
            onChange={(e) => handleField("budget", e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b8972e]/30 focus:border-[#b8972e] bg-white transition-colors"
          >
            {BUDGETS.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Tell us about your project <span className="text-red-500">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => handleField("message", e.target.value)}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b8972e]/30 focus:border-[#b8972e] resize-none transition-colors"
          placeholder="Describe your project, timeline, and what type of talent you're looking for..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-xl">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 bg-[#1a1a2e] text-white font-semibold rounded-xl hover:bg-[#2a2a4e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      <p className="text-xs text-center text-gray-400">
        We typically respond within 1–2 business days.
      </p>
    </form>
  );
}
