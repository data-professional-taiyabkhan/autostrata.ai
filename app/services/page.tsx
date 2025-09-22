import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPage(){
  return (
    <main id="main">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold">Services</h1>
        <p className="mt-3 opacity-80 max-w-3xl">AI-powered solutions for modern businesses. From intelligent agents to automated workflows, we deliver cutting-edge technology that drives real results.</p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-6">AI Agent Solutions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-3 text-lg">Custom AI Agent Development</h3>
            <p className="opacity-90">Tailored agents for customer support, sales, research, and knowledge management.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-3 text-lg">Conversational AI & Chatbots</h3>
            <p className="opacity-90">Smart chat assistants for websites, apps, and customer engagement.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-3 text-lg">RAG Agents</h3>
            <p className="opacity-90">AI that connects to your data for accurate, context-aware answers.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-3 text-lg">Multi-Agent Systems</h3>
            <p className="opacity-90">Collaborative agents that handle complex workflows.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover:-translate-y-0.5 transition md:col-span-2">
            <h3 className="font-bold mb-3 text-lg">AI Research Assistants</h3>
            <p className="opacity-90">Summarisation, document Q&A, and market/academic research tools.</p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-6">AI Automation Solutions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-3 text-lg">Business Process Automation (BPA)</h3>
            <p className="opacity-90">Automating repetitive back-office tasks for efficiency.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-3 text-lg">Intelligent Document Processing (IDP)</h3>
            <p className="opacity-90">Extract, classify, and analyse data from PDFs, invoices, and forms.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-3 text-lg">Workflow Orchestration</h3>
            <p className="opacity-90">Automating multi-step workflows across CRM, ERP, and enterprise systems.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover:-translate-y-0.5 transition">
            <h3 className="font-bold mb-3 text-lg">Enterprise Tool Integration</h3>
            <p className="opacity-90">Connecting AI with Salesforce, SAP, HubSpot, and other platforms.</p>
          </article>
        </div>
      </AnimatedSection>
    </main>
  )
}
