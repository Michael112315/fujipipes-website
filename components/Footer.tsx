import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* CTA SECTION */}
     


      {/* MAIN FOOTER */}
      <section className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          {/* FUJIPIPES LOGO */}
          <img
            src="https://fujipipes.com/wp-content/uploads/2026/09/0-02-06-869cc4f4e54dd22be630f786ca96b24ccbf2c16e011e71be860013a67e082e23_f9e396639250daa0-scaled.webp"
            alt="FUJIPIPES"
            className="footer-logo"
          />

          <p className="footer-tagline">
            A Filipino Company. A Stronger Tomorrow.
          </p>

        </div>


        {/* COMPANY */}
        <div className="footer-column">

          <h4>Company</h4>

          <Link href="/about">
            About Us
          </Link>

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <Link href="/careers">
            Careers
          </Link>

        </div>


        {/* SOLUTIONS */}
        <div className="footer-column">

          <h4>Solutions</h4>

          <Link href="/solutions">
            Water Supply
          </Link>

          <Link href="/solutions">
            Drainage &amp; Sewerage
          </Link>

          <Link href="/solutions">
            Agriculture
          </Link>

          <Link href="/solutions">
            Infrastructure
          </Link>

        </div>


        {/* PRODUCTS */}
        <div className="footer-column">

          <h4>Products</h4>

          <Link href="/products">
            HDPE Pipes
          </Link>

          <Link href="/products">
            uPVC Pipes
          </Link>

          <Link href="/products">
            PPR Pipes
          </Link>

          <Link href="/products">
            Tanks &amp; Storage
          </Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column">

          <h4>Contact</h4>

          <span>+63 917 300 1110</span>

          <a href="mailto:sales@fujipipes.com">
            sales@fujipipes.com
          </a>

          <span>
            Fujipipes Compound Brgy. Hawaiian Silay City, Negros Occidental, Philippines
          </span>

        </div>

      </section>


      {/* COPYRIGHT */}
      <div className="copyright">

        <p>
          © 2026 Central Negros Fujipipes Industries, Inc.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}