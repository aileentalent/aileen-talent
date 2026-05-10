import JoinForm from "@/components/JoinForm";

export const metadata = {
  title: "Join the Team | Aileen Talent",
  description: "Apply to join the Aileen Talent roster. Submit your application and photos to be considered for brand ambassador, hostess, and model opportunities.",
};

export default function JoinPage() {
  return (
    <>
      <section className="bg-[#faf8f5] pt-28 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#b8972e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Careers</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#1c1917]">Join the Team</h1>
          <p className="mt-4 text-lg text-[#78716c] max-w-xl">
            Think you have what it takes? Fill out the application below and our team will review your submission and reach out if there&apos;s a fit.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <JoinForm />
        </div>
      </section>
    </>
  );
}
