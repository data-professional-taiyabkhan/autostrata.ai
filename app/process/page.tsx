import AnimatedSection from "@/components/AnimatedSection";

export default function ProcessPage(){
  return (
    <main id="main">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold">How we work</h1>
        <ol className="grid md:grid-cols-4 gap-4 list-none counter-reset">
          {['Discover','Prototype','Launch','Scale'].map((step, i)=>(
            <li key={step} className="relative bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow">
              <span className="absolute -top-3 -left-3 w-7 h-7 grid place-items-center font-bold text-[#06121f] rounded-full bg-gradient-to-br from-brand to-[#3fa2ff] shadow-glow">{i+1}</span>
              <h3 className="font-bold mb-2">{step}</h3>
              <p className="opacity-80">We execute with clear scopes, milestones, and a definition of done.</p>
            </li>
          ))}
        </ol>
      </AnimatedSection>
    </main>
  )
}
