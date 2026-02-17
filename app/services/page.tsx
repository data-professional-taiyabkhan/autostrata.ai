import { Metadata } from 'next';
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import StaggeredGrid from "@/components/StaggeredGrid";

export const metadata: Metadata = {
  title: 'AI Services - Custom AI Agents & Automation Solutions',
  description: 'Comprehensive AI services including custom AI agents, chatbots, RAG systems, business process automation, and enterprise integrations. Delivered without offshore outsourcing.',
  alternates: {
    canonical: '/services'
  }
};

export default function ServicesPage(){
  return (
    <div id="main">
      <AnimatedSection>
        <AnimatedText direction="up" delay={0.1}>
          <h1 className="text-4xl font-extrabold">Services</h1>
          <p className="mt-3 opacity-80 max-w-3xl">AI-powered solutions for modern businesses. From intelligent agents to automated workflows, we deliver cutting-edge technology that drives real results.</p>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="left" delay={0.2}>
          <h2 className="text-3xl font-bold mb-6">AI Agent Solutions</h2>
        </AnimatedText>
        <StaggeredGrid className="grid md:grid-cols-2 gap-4" staggerDelay={0.15}>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Custom AI Agent Development</h3>
            <p className="opacity-90">Tailored agents for customer support, sales, research, and knowledge management.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Conversational AI & Chatbots</h3>
            <p className="opacity-90">Smart chat assistants for websites, apps, and customer engagement.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">RAG Agents</h3>
            <p className="opacity-90">AI that connects to your data for accurate, context-aware answers.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Multi-Agent Systems</h3>
            <p className="opacity-90">Collaborative agents that handle complex workflows.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card md:col-span-2">
            <h3 className="font-bold mb-3 text-lg">AI Research Assistants</h3>
            <p className="opacity-90">Summarisation, document Q&A, and market/academic research tools.</p>
          </article>
        </StaggeredGrid>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="right" delay={0.3}>
          <h2 className="text-3xl font-bold mb-6">AI Automation Solutions</h2>
        </AnimatedText>
        <StaggeredGrid className="grid md:grid-cols-2 gap-4" staggerDelay={0.15}>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Business Process Automation (BPA)</h3>
            <p className="opacity-90">Automating repetitive back-office tasks for efficiency.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Intelligent Document Processing (IDP)</h3>
            <p className="opacity-90">Extract, classify, and analyse data from PDFs, invoices, and forms.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Workflow Orchestration</h3>
            <p className="opacity-90">Automating multi-step workflows across CRM, ERP, and enterprise systems.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Enterprise Tool Integration</h3>
            <p className="opacity-90">Connecting AI with Salesforce, SAP, HubSpot, and other platforms.</p>
          </article>
        </StaggeredGrid>
      </AnimatedSection>
    </div>
  )
}
