import AnimatedSection from "@/components/AnimatedSection";

export default function HomePage(){
  return (
    <main id="main">
      <AnimatedSection>
        <div className="container grid md:grid-cols-2 gap-8 items-center py-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">AI‑powered solutions, built fast & affordable</h1>
            <p className="mt-3 opacity-80">We deliver <b>intelligent AI agents</b>, <b>business automation</b>, and <b>enterprise integration</b> without offshore outsourcing — from startups to enterprise.</p>
            <div className="mt-5 flex gap-3">
              <a className="px-4 py-2 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10" href="/contact">Start a project</a>
              <a className="px-4 py-2 rounded-lg border border-white/20" href="/services">Explore services</a>
            </div>
            <ul className="flex flex-wrap gap-2 mt-4 text-sm opacity-90">
              <li className="border border-white/10 rounded-full px-2 py-1">AI Agents</li>
              <li className="border border-white/10 rounded-full px-2 py-1">RAG Systems</li>
              <li className="border border-white/10 rounded-full px-2 py-1">Process Automation</li>
              <li className="border border-white/10 rounded-full px-2 py-1">Document Processing</li>
              <li className="border border-white/10 rounded-full px-2 py-1">Enterprise Integration</li>
            </ul>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 shadow-glow overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(91,188,255,.18),transparent_70%)]" />
              <div className="p-6 relative z-10">
                <h3 className="font-bold mb-2">AutoStrata Engine</h3>
                <p className="opacity-80">Our orchestration layer combines AI agents, tool use, and clean engineering to deliver real outcomes quickly.</p>
              </div>
              <div className="h-40 md:h-56 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[length:22px_22px]" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-4">What we do</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <article className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-2">AI Agent Solutions</h3>
            <p className="opacity-80">Custom AI agents, chatbots, RAG systems, and multi-agent workflows for intelligent automation.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-2">AI Automation Solutions</h3>
            <p className="opacity-80">Business process automation, document processing, and enterprise tool integration.</p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-4">Selected work</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {['Virtual Receptionist','Mummy Help (Mobile)','AI Diet Tracker','Visa‑Sponsor Analytics'].map((t)=>(
            <article key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow">
              <h3 className="font-bold mb-2">{t}</h3>
              <p className="opacity-80">Outcome‑driven build. Ask us for a walkthrough demo.</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-glow">
          <h2 className="text-3xl font-bold">Ready to build?</h2>
          <p className="opacity-80 mt-2">Tell us your goals — we’ll propose the fastest path to value.</p>
          <p className="mt-4"><a className="px-4 py-2 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10" href="/contact">Talk to AutoStrata</a></p>
        </div>
      </AnimatedSection>
    </main>
  )
}
