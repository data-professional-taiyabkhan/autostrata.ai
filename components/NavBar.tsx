'use client'
import Link from "next/link";
import { useState } from "react";
import ServicesDropdown from "@/components/ServicesDropdown";
import ProcessDropdown from "@/components/ProcessDropdown";

export default function NavBar(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#070b18b3] backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-wide">
          <img src="/logo.svg" className="w-7 h-7" alt="" />
          <span>AutoStrata<span className="text-brand">.ai</span></span>
        </Link>
        <button className="md:hidden border border-white/20 px-2 py-1 rounded" onClick={()=>setOpen(!open)} aria-expanded={open}>☰</button>
        <nav className={`md:flex items-center gap-4 ${open ? "flex flex-col absolute left-0 right-0 top-12 bg-[#0c1226] p-3 border-b border-white/10" : "hidden md:flex"}`}>
          <Link href="/about" className="opacity-90 hover:opacity-100">About</Link>
          <ServicesDropdown />
          <ProcessDropdown />
          <Link href="/contact" className="bg-gradient-to-r from-brand to-[#3fa2ff] text-[#06121f] font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
