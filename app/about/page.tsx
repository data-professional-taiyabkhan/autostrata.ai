import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage(){
  return (
    <main id="main">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold">About AutoStrata</h1>
        <p className="mt-3 opacity-80 max-w-3xl">AutoStrata exists to make enterprise‑grade technology accessible to founders and SMBs. We combine agentic AI, automation, and clean engineering to deliver measurable outcomes quickly.</p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-3 gap-4">
          <article className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow"><h3 className="font-bold mb-2">AI‑first, not offshore</h3><p className="opacity-80">We automate repetitive work so your budget goes into results, not headcount.</p></article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow"><h3 className="font-bold mb-2">Security by default</h3><p className="opacity-80">Least privilege, encrypted secrets, and GDPR‑aware data handling.</p></article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow"><h3 className="font-bold mb-2">Outcomes over output</h3><p className="opacity-80">Sprint scopes with a clear definition of done and measurable impact.</p></article>
        </div>
      </AnimatedSection>
    </main>
  )
}
