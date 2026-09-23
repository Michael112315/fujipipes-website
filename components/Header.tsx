"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <div className="topbar"><div className="topbar-inner"><span>A Filipino Company. A Stronger Tomorrow.</span><div className="top-links"><Link href="/dealer-locator">📍 Dealer Locator</Link><Link href="#">▣ Download Brochure</Link><Link href="#">▣ Careers</Link><span>●</span><span>▶</span><span>in</span><div className="search-small"><input placeholder="Search products, solutions..."/><span>⌕</span></div></div></div></div>
    <header className="header"><div className="nav-container">
  <Link href="/" className="brand" onClick={close}>
  <Image
    src="https://fujipipes.com/wp-content/uploads/2025/03/FUJIPIPES-Logo-scaled.webp"
    alt="FUJIPIPES"
    width={220}
    height={70}
    className="brand-logo"
    priority
  />
</Link>
      <button className="mobile-menu-button" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? "nav open" : "nav"}>
        <Link href="/" onClick={close}>Home</Link>
        <Link href="/products" onClick={close}>Products <small>⌄</small></Link>
        <Link href="/solutions" onClick={close}>Solutions <small>⌄</small></Link>
        <Link href="/projects" onClick={close}>Projects</Link>
        <Link href="/about" onClick={close}>About Us <small>⌄</small></Link>
        <Link href="#" onClick={close}>Resources <small>⌄</small></Link>
        <Link href="/contact" onClick={close}>Contact</Link>
        <Link href="/request-a-quote" className="quote-button" onClick={close}>Request a Quote →</Link>
      </nav>
    </div></header>
  </>;
}
