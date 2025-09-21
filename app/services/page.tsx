import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPage(){
  return (
    <main id="main">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold">Services</h1>
        <p className="mt-3 opacity-80 max-w-3xl">Agentic AI & automation, data science & ML, modern web/app development, and cloud security.</p>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-4">
          <article className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow">
            <h2 className="font-bold mb-2">Agentic AI & Automation</h2>
            <ul className="list-disc list-inside opacity-90"><li>Chatbots & copilots (RAG)</li><li>Workflow automation</li><li>Voice triggers & IVR</li></ul>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow">
            <h2 className="font-bold mb-2">Data Science & ML</h2>
            <ul className="list-disc list-inside opacity-90"><li>Dashboards & reporting</li><li>Forecasting & scoring</li><li>NLP classification/search</li></ul>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow">
            <h2 className="font-bold mb-2">Web, App & APIs</h2>
            <ul className="list-disc list-inside opacity-90"><li>React/Next.js</li><li>Secure auth & admin portals</li><li>Serverless APIs</li></ul>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow">
            <h2 className="font-bold mb-2">Cloud & Security</h2>
            <ul className="list-disc list-inside opacity-90"><li>Vercel/Cloudflare/Render</li><li>Observability & backups</li><li>GDPR‑aware practices</li></ul>
          </article>
        </div>
      </AnimatedSection>
    </main>
  )
}
