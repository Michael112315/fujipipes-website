"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WORDPRESS_PRODUCTS_HERO =
  "https://fujipipes.com/wp-content/uploads/2026/10/Modern-Industrial-Facade-with-Bold-Signage.webp";

const products = [
  {
    title: "HDPE Pipes & Fittings",
    category: "HDPE",
    image:
      "https://fujipipes.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-28-2026-03_04_33-PM.webp",
  },

  {
    title: "Blue Pipes & Fittings",
    category: "Blue",
    image:
      "https://fujipipes.com/wp-content/uploads/2026/10/Glossy-Blue-PVC-Pipe-Fittings-Display.webp",
  },

  {
    title: "PPR Pipes & Fittings",
    category: "PPR",
    image:
      "https://fujipipes.com/wp-content/uploads/2026/10/White-PVC-Pipes-and-Plumbing-Fittings.webp",
  },

  {
    title: "Sanitary Pipes & Fittings",
    category: "Sanitary",
    image:
      "https://fujipipes.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-28-2026-03_30_50-PM.webp",
  },

  // {
  //   title: "Drainage Pipes",
  //   category: "Drainage",
  //   image:
  //     "https://fujipipes.com/wp-content/uploads/2026/10/drainage-pipes.jpg",
  // },

  {
    title: "Electrical Pipes & Fittings",
    category: "Electrical",
    image:
      "https://fujipipes.com/wp-content/uploads/2026/10/Glossy-Orange-PVC-Pipe-Collection.webp",
  },

  {
    title: "Tanks & Storage Solutions",
    category: "Tanks",
    image:
      "https://fujipipes.com/wp-content/uploads/2026/09/0-02-06-67aabe1081eb0dceb0227afd562a02542faf7b52d15016b925701ba31ea05b98_59842af2fb8e2ba9.webp",
  },

  {
    title: "Roofing Solutions",
    category: "Roofing",
    image:
      "https://fujipipes.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-28-2026-03_36_46-PM.webp",
  },
];

const categories = [
  "All",
  "HDPE",
  "Blue",
  "PPR",
  "Sanitary",
  // "Drainage",
  "Electrical",
  "Tanks",
  "Roofing",
];

export default function Products() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <>
      <Header />

      {/* =====================================================
          PRODUCTS HERO
      ===================================================== */}

      <section
        className="inner-hero products-inner-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(3, 38, 92, 0.96) 0%,
              rgba(3, 38, 92, 0.82) 35%,
              rgba(3, 38, 92, 0.45) 68%,
              rgba(3, 38, 92, 0.12) 100%
            ),
            url("${WORDPRESS_PRODUCTS_HERO}")
          `,
        }}
      >
        <div className="inner-hero-content">

          {/* BREADCRUMB */}
          <div className="breadcrumb">
            Home <span>›</span> OUR PRODUCTS
          </div>

          {/* SMALL TITLE */}
          <div className="products-label">
            PRODUCTS
          </div>

          {/* MAIN TITLE */}
          <h1>OUR PRODUCTS</h1>

          {/* DESCRIPTION */}
          <p>
            High-quality piping and water storage solutions
            for a stronger, more sustainable Philippines.
          </p>

        </div>
      </section>


      {/* =====================================================
          PRODUCTS CONTENT
      ===================================================== */}

      <main className="products-page">

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="product-sidebar">

          <h3>Product Categories</h3>

          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={
                category === cat
                  ? "selected"
                  : ""
              }
              onClick={() => setCategory(cat)}
            >
              {cat === "All"
                ? "All Products"
                : cat}

              <span>›</span>
            </button>
          ))}


          {/* HELP BOX */}

          <div className="help-box">

            <div className="help-icon">
              ☎
            </div>

            <h4>Need Help?</h4>

            <p>
              Our team is ready to assist you in
              finding the right product.
            </p>

            <a href="/contact">
              Contact Us →
            </a>

          </div>

        </aside>


        {/* =================================================
            MAIN PRODUCT AREA
        ================================================= */}

        <section>

          {/* HEADING */}

          <div className="page-heading-row">

            <div>

              <small>
                FEATURED PRODUCT CATEGORIES
              </small>

              <h2>
                Products
              </h2>

            </div>

            <span>
              {filteredProducts.length} Products
            </span>

          </div>


          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          <div className="product-grid">

            {filteredProducts.map(
              (product) => (

                <article
                  className="product-card"
                  key={product.title}
                >

                  {/* PRODUCT IMAGE */}

                  <div className="card-image">

                    <img
                      src={product.image}
                      alt={product.title}
                    />

                  </div>


                  {/* PRODUCT CONTENT */}

                  <div className="card-content">

                    <h3>
                      {product.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() => {
                        window.location.href =
                          "/request-a-quote";
                      }}
                    >
                      View Products →
                    </button>

                  </div>

                </article>

              )
            )}

          </div>


          {/* =================================================
              EMPTY RESULT
          ================================================= */}

          {filteredProducts.length === 0 && (

            <div
              style={{
                padding: "50px 20px",
                textAlign: "center",
                color: "#60708a",
              }}
            >

              <h3>
                No products found
              </h3>

              <p>
                Please select another product
                category.
              </p>

            </div>

          )}

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </>
  );
}