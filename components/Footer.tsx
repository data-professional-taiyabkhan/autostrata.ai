import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10 bg-black/20">
      <div className="container py-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-extrabold tracking-wide mb-3">
              <img src="/logo.svg" className="w-6 h-6" alt="AutoStrata logo" loading="lazy" />
              <span>AutoStrata<span className="text-brand">.ai</span></span>
            </Link>
            <p className="text-sm opacity-60 leading-relaxed">
              AI‑powered solutions built fast &amp; affordable. UK-based team serving startups to enterprise.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <nav className="flex flex-col gap-2 text-sm opacity-70" aria-label="Footer navigation">
              <Link href="/about" className="hover:opacity-100 transition-opacity">About</Link>
              <Link href="/services" className="hover:opacity-100 transition-opacity">Services</Link>
              <Link href="/work" className="hover:opacity-100 transition-opacity">Work</Link>
              <Link href="/insights" className="hover:opacity-100 transition-opacity">Insights</Link>
              <Link href="/process" className="hover:opacity-100 transition-opacity">Process</Link>
              <Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Services</h4>
            <nav className="flex flex-col gap-2 text-sm opacity-70" aria-label="Services navigation">
              <Link href="/services/ai-agents" className="hover:opacity-100 transition-opacity">AI Agents</Link>
              <Link href="/services/rag" className="hover:opacity-100 transition-opacity">RAG Systems</Link>
              <Link href="/services/automation" className="hover:opacity-100 transition-opacity">Automation</Link>
              <Link href="/services/document-ai" className="hover:opacity-100 transition-opacity">Document AI</Link>
              <Link href="/products" className="hover:opacity-100 transition-opacity">Products</Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Connect</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <a href="mailto:contact@autostrata.ai" className="hover:opacity-100 transition-opacity">
                ✉️ contact@autostrata.ai
              </a>
              <p>📍 Egham, United Kingdom</p>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://www.linkedin.com/company/108903270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/autostarta.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/data-professional-taiyabkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm opacity-60">
          <p>© {new Date().getFullYear()} AutoStrata Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <span>·</span>
            <span>Company No. Registered in England & Wales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
