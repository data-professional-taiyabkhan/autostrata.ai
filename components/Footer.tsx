export default function Footer(){
  return (
    <footer className="border-t border-white/10 mt-10 bg-black/20">
      <div className="container flex flex-wrap items-center justify-between gap-3 py-4">
        <p>© {new Date().getFullYear()} AutoStrata Ltd. All rights reserved.</p>
        <nav className="flex gap-3 opacity-80">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/process">Process</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
