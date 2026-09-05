import { useState } from "react";
import "./App.css";

import photo1 from "./assets/1.jpg";
import photo2 from "./assets/2.jpg";
import photo3 from "./assets/3.jpg";
import photo4 from "./assets/4.jpg";
import photo5 from "./assets/5.jpg";




/* =====================================================
   BLOG ARTICLES
===================================================== */

const articles = [
  {
    id: 1,
    title: "Sport Bikes: Speed, Performance, and Modern Design",
    category: "Sport Bikes",
    author: "Marcus Vance",
    date: "September 2, 2026",
    readTime: "6 min read",
    image: photo1,
    excerpt:
      "Sport motorcycles are designed around performance, sharp handling, aerodynamic styling, and an exciting riding experience. Their aggressive appearance and modern technology have made them one of the most recognizable motorcycle categories.",
    fullContent:
      "Sport bikes are motorcycles designed with performance and handling in mind. They commonly feature aggressive styling, aerodynamic bodywork, responsive controls, and performance-focused engines. Their riding position is usually designed to give the rider greater control during active riding. Beyond their performance, sport bikes have also become popular because of their distinctive designs and advanced technology. For riders who appreciate modern engineering and dynamic styling, sport motorcycles offer an exciting category to explore.",
    tags: ["Sport Bike", "Performance", "Speed"],
  },
  {
    id: 2,
    title: "Cruiser Motorcycles: Classic Style and Comfortable Riding",
    category: "Cruiser",
    author: "Elena Rostova",
    date: "August 28, 2026",
    readTime: "7 min read",
    image: photo2,
    excerpt:
      "Cruiser motorcycles are known for their relaxed riding position, classic styling, and comfortable road presence. They remain a popular choice for riders who enjoy a calm and stylish motorcycle experience.",
    fullContent:
      "Cruiser motorcycles are recognized for their low-slung design, relaxed riding position, and classic appearance. Many cruisers focus on comfort and smooth riding rather than an aggressive performance-oriented posture. Their larger seats, wide handlebars, and distinctive styling give them a strong visual identity. Cruiser motorcycles are often associated with long road trips, relaxed weekend rides, and riders who appreciate traditional motorcycle design.",
    tags: ["Cruiser", "Classic", "Comfort"],
  },
  {
    id: 3,
    title: "Naked Bikes: Simple Design With Everyday Performance",
    category: "Naked Bikes",
    author: "Coach Dave Miller",
    date: "August 15, 2026",
    readTime: "6 min read",
    image: photo3,
    excerpt:
      "Naked motorcycles combine a simple appearance with practical performance. With less bodywork and an upright riding position, they offer a balance between style, comfort, and everyday usability.",
    fullContent:
      "Naked bikes are motorcycles that generally have minimal bodywork compared with fully-faired sport motorcycles. Their exposed mechanical components create a clean and distinctive appearance. Many naked motorcycles use an upright riding position that can be practical for everyday riding. This combination of simple styling, responsive performance, and comfortable ergonomics makes naked bikes a versatile category for motorcycle enthusiasts.",
    tags: ["Naked Bike", "Street", "Everyday"],
  },
  {
    id: 4,
    title: "Adventure Motorcycles: Built for Roads and Exploration",
    category: "Adventure",
    author: "Marcus Vance",
    date: "August 10, 2026",
    readTime: "7 min read",
    image: photo4,
    excerpt:
      "Adventure motorcycles are designed for riders who want versatility. Their upright position, practical design, and long-distance capabilities make them suitable for exploring different types of roads.",
    fullContent:
      "Adventure motorcycles are designed with versatility in mind. They typically provide an upright riding position, comfortable ergonomics, practical storage options, and suspension designed for a variety of riding environments. Some adventure motorcycles are built primarily for paved roads, while others are designed to handle a mixture of paved and unpaved surfaces. Their combination of comfort and versatility makes them popular among riders who enjoy traveling and exploring new destinations.",
    tags: ["Adventure", "Touring", "Exploration"],
  },
  {
    id: 5,
    title: "Scooters: Practical, Efficient, and Easy to Ride",
    category: "Scooter",
    author: "Elena Rostova",
    date: "August 2, 2026",
    readTime: "6 min read",
    image: photo5,
    excerpt:
      "Scooters are popular for everyday transportation because of their practical design, easy controls, convenient storage, and comfortable riding position.",
    fullContent:
      "Scooters are designed with practicality and convenience in mind. They commonly feature step-through frames, automatic transmissions, comfortable seats, and useful storage areas. These characteristics make scooters convenient for commuting and everyday transportation. Their compact designs can also make them easy to maneuver in busy areas. For people looking for practical two-wheeled transportation, scooters provide a useful and accessible motorcycle category.",
    tags: ["Scooter", "Commuter", "Practical"],
  },
];

/* =====================================================
   MOTORCYCLES
===================================================== */

const motorcycles = [
  {
    id: 1,
    name: "Performance Sport Bike",
    brand: "RACING",
    price: "$8,500",
    image: photo1,
    category: "Sport Bike",
    rating: 5,
    description:
      "A performance-focused sport motorcycle with aggressive styling, responsive handling, and modern road-focused design.",
  },
  {
    id: 2,
    name: "Classic Cruiser",
    brand: "CLASSIC",
    price: "$9,200",
    image: photo2,
    category: "Cruiser",
    rating: 5,
    description:
      "A stylish cruiser motorcycle featuring a relaxed riding position, classic design, and comfortable road presence.",
  },
  {
    id: 3,
    name: "Urban Naked Bike",
    brand: "STREET",
    price: "$7,800",
    image: photo3,
    category: "Naked Bike",
    rating: 5,
    description:
      "A versatile naked bike with minimalist bodywork, upright ergonomics, and practical performance for everyday riding.",
  },
  {
    id: 4,
    name: "Adventure Explorer",
    brand: "ADVENTURE",
    price: "$11,500",
    image: photo4,
    category: "Adventure",
    rating: 5,
    description:
      "A versatile adventure motorcycle designed for long-distance journeys, exploration, and different road conditions.",
  },
  {
    id: 5,
    name: "City Scooter",
    brand: "URBAN",
    price: "$4,500",
    image: photo5,
    category: "Scooter",
    rating: 5,
    description:
      "A practical scooter designed for everyday transportation with convenient controls, comfortable seating, and efficient city travel.",
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [likes, setLikes] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState("All");

  const [selectedArticle, setSelectedArticle] =
    useState(null);

  const [messageSent, setMessageSent] = useState(false);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const navigate = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     LIKE FUNCTION
  ===================================================== */

  const toggleLike = (id) => {
    setLikes((currentLikes) =>
      currentLikes.includes(id)
        ? currentLikes.filter((item) => item !== id)
        : [...currentLikes, id]
    );
  };

  /* =====================================================
     FILTER MOTORCYCLES
  ===================================================== */

  const filteredMotorcycles = motorcycles.filter((motorcycle) => {
    return (
      selectedBrand === "All" ||
      motorcycle.brand === selectedBrand
    );
  });

  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">
        <div className="nav-container">

          <button
            className="logo-button"
            onClick={() => navigate("home")}
          >
            MOTO<span>BLOG</span>
          </button>

          <nav className="nav-links">

            <button
              className={
                currentPage === "home"
                  ? "active-link"
                  : ""
              }
              onClick={() => navigate("home")}
            >
              Home
            </button>

            <button
              className={
                currentPage === "blog"
                  ? "active-link"
                  : ""
              }
              onClick={() => navigate("blog")}
            >
              Blog
            </button>

            <button
              className={
                currentPage === "shop"
                  ? "active-link"
                  : ""
              }
              onClick={() => navigate("shop")}
            >
              Motorcycles
            </button>

            <button
              className={
                currentPage === "features"
                  ? "active-link"
                  : ""
              }
              onClick={() => navigate("features")}
            >
              Features
            </button>

            <button
              className={
                currentPage === "about"
                  ? "active-link"
                  : ""
              }
              onClick={() => navigate("about")}
            >
              About
            </button>

            <button
              className={`nav-cta ${
                currentPage === "contact"
                  ? "active-link"
                  : ""
              }`}
              onClick={() => navigate("contact")}
            >
              Contact
            </button>

          </nav>

          <div className="nav-likes">
            <span>♥</span> {likes.length}
          </div>

        </div>
      </header>

      {/* =====================================================
          HOME
      ===================================================== */}

      {currentPage === "home" && (
        <main>

          <section className="hero">

            <div className="hero-content">

              <div className="hero-text">

                <p className="small-title">
                  MOTORCYCLE STYLE HUB
                </p>

                <h1>
                  RIDE
                  <br />
                  <span>YOUR STYLE</span>
                </h1>

                <p className="hero-description">
                  Discover motorcycles, explore different
                  riding styles, learn about motorcycle
                  features, and find inspiration for your
                  next ride. From fast sport bikes and
                  comfortable cruisers to practical scooters
                  and adventure motorcycles, explore the
                  world of two-wheeled machines in one place.
                </p>

                <div className="hero-buttons">

                  <button
                    className="hero-button"
                    onClick={() => navigate("shop")}
                  >
                    Explore Motorcycles →
                  </button>

                  <button
                    className="hero-button secondary"
                    onClick={() => navigate("blog")}
                  >
                    Read Our Blog
                  </button>

                </div>

                <div className="hero-stats">

                  <div>
                    <strong>5</strong>
                    <span>Motorcycle Types</span>
                  </div>

                  <div>
                    <strong>5</strong>
                    <span>Style Guides</span>
                  </div>

                  <div>
                    <strong>100%</strong>
                    <span>Ride Focus</span>
                  </div>

                </div>

              </div>

              <div className="hero-image">

                <img
                  src={photo1}
                  alt="Sport Motorcycle"
                />

                <div className="floating-card">

                  <span>FEATURED</span>

                  <strong>
                    Performance Sport Bike
                  </strong>

                  <small>
                    Featured Motorcycle
                  </small>

                </div>

              </div>

            </div>

          </section>

          <section className="home-intro">

            <p className="section-label">
              EXPLORE OUR MOTORCYCLE COLLECTION
            </p>

            <h2>
              Five Motorcycle Styles.
              <br />
              Endless Roads To Explore.
            </h2>

            <p>
              From performance-focused sport bikes and
              classic cruisers to versatile adventure bikes,
              naked motorcycles, and practical scooters,
              discover five popular motorcycle categories
              and learn what makes each one unique.
            </p>

            <button
              className="dark-button"
              onClick={() => navigate("shop")}
            >
              View Motorcycles →
            </button>

          </section>

        </main>
      )}

      {/* =====================================================
          BLOG
      ===================================================== */}

      {currentPage === "blog" && (
        <main className="page-wrapper">

          <section className="blog-section">

            <div className="page-heading">

              <p className="section-label">
                MOTORCYCLE BLOG
              </p>

              <h2>
                Riding Guides & Motorcycle Stories
              </h2>

              <p className="long-description">
                Explore our motorcycle articles covering
                different motorcycle categories, riding
                styles, designs, features, comfort, and
                everyday transportation. Whether you are
                interested in performance motorcycles,
                classic cruisers, adventure bikes, naked
                bikes, or scooters, our guides provide
                useful information to help you understand
                what makes each motorcycle style different.
                Discover the history, characteristics, and
                practical benefits of motorcycles while
                finding inspiration for your next ride.
              </p>

            </div>

            <div className="blog-grid">

              {articles.map((article) => (
                <article
                  className="blog-card"
                  key={article.id}
                >

                  <div className="blog-image-wrapper">

                    <img
                      src={article.image}
                      alt={article.title}
                    />

                    <span className="blog-category-badge">
                      {article.category}
                    </span>

                  </div>

                  <div className="blog-card-content">

                    <div className="blog-meta">

                      <span>
                        By {article.author}
                      </span>

                      <span>
                        {article.readTime}
                      </span>

                    </div>

                    <h3>
                      {article.title}
                    </h3>

                    <p className="date-line">
                      {article.date}
                    </p>

                    <p className="excerpt">
                      {article.excerpt}
                    </p>

                    <button
                      className="read-more"
                      onClick={() =>
                        setSelectedArticle(article)
                      }
                    >
                      Read Full Article →
                    </button>

                    <div className="tag-list">

                      {article.tags.map((tag) => (
                        <span
                          className="tag-pill"
                          key={tag}
                        >
                          #{tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </section>

        </main>
      )}

      {/* =====================================================
          ARTICLE MODAL
      ===================================================== */}

      {selectedArticle && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedArticle(null)}
        >

          <div
            className="article-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="close-button"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article"
            >
              ×
            </button>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
            />

            <div className="modal-content">

              <span className="modal-category">
                {selectedArticle.category}
              </span>

              <h2>
                {selectedArticle.title}
              </h2>

              <p className="modal-meta">
                By {selectedArticle.author} •{" "}
                {selectedArticle.date} •{" "}
                {selectedArticle.readTime}
              </p>

              <p>
                {selectedArticle.fullContent}
              </p>

              <div className="tag-list">

                {selectedArticle.tags.map((tag) => (
                  <span
                    className="tag-pill"
                    key={tag}
                  >
                    #{tag}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>
      )}

      {/* =====================================================
          MOTORCYCLE SHOP
      ===================================================== */}

      {currentPage === "shop" && (
        <main className="page-wrapper">

          <section className="motorcycle-section">

            <div className="page-heading">

              <p className="section-label">
                MOTORCYCLE COLLECTION
              </p>

              <h2>
                Five Motorcycle Types
              </h2>

              <p>
                Explore five different motorcycle styles
                and discover the characteristics that make
                each one unique.
              </p>

            </div>

            {/* NO SEARCH BAR */}

            <div className="filters">

              {[
                "All",
                "RACING",
                "CLASSIC",
                "STREET",
                "ADVENTURE",
                "URBAN",
              ].map((brand) => (

                <button
                  key={brand}
                  className={
                    selectedBrand === brand
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedBrand(brand)
                  }
                >
                  {brand === "All"
                    ? "All Motorcycles"
                    : brand}
                </button>

              ))}

            </div>

            <div className="motorcycle-grid">

              {filteredMotorcycles.map(
                (motorcycle) => (

                  <article
                    className="motorcycle-card"
                    key={motorcycle.id}
                  >

                    <div className="image-container">

                      <img
                        src={motorcycle.image}
                        alt={motorcycle.name}
                      />

                      <span className="brand-tag">
                        {motorcycle.brand}
                      </span>

                      <button
                        className="card-like"
                        onClick={() =>
                          toggleLike(motorcycle.id)
                        }
                        aria-label={`Like ${motorcycle.name}`}
                      >
                        {likes.includes(
                          motorcycle.id
                        )
                          ? "♥"
                          : "♡"}
                      </button>

                    </div>

                    <div className="motorcycle-info">

                      <p className="category">
                        {motorcycle.category}
                      </p>

                      <h3>
                        {motorcycle.name}
                      </h3>

                      <div className="rating">
                        {"★".repeat(
                          motorcycle.rating
                        )}

                        <span>
                          {" "}
                          {motorcycle.rating}.0
                        </span>
                      </div>

                      <p className="description">
                        {motorcycle.description}
                      </p>

                      <div className="motorcycle-bottom">

                        <strong>
                          {motorcycle.price}
                        </strong>

                        <button
                          className="view-button"
                          onClick={() =>
                            navigate("contact")
                          }
                        >
                          Ask About Bike
                        </button>

                      </div>

                    </div>

                  </article>

                )
              )}

            </div>

          </section>

        </main>
      )}

      {/* =====================================================
          FEATURES
      ===================================================== */}

      {currentPage === "features" && (
        <main className="page-wrapper">

          <section className="features">

            <div className="page-heading">

              <p className="section-label">
                MOTORCYCLE FEATURES
              </p>

              <h2>
                What Makes A Great Motorcycle?
              </h2>

              <p>
                A great motorcycle combines performance,
                comfort, safety, reliability, and design
                to create an enjoyable riding experience.
              </p>

            </div>

            <div className="feature-grid">

              <div className="feature">

                <div className="feature-number">
                  01
                </div>

                <h3>
                  Performance
                </h3>

                <p>
                  Engine performance, acceleration,
                  handling, and responsive controls
                  influence how a motorcycle feels
                  on the road.
                </p>

              </div>

              <div className="feature">

                <div className="feature-number">
                  02
                </div>

                <h3>
                  Comfort
                </h3>

                <p>
                  A comfortable seat, suitable riding
                  position, and practical ergonomics
                  can make longer rides more enjoyable.
                </p>

              </div>

              <div className="feature">

                <div className="feature-number">
                  03
                </div>

                <h3>
                  Safety
                </h3>

                <p>
                  Braking systems, lighting, tires,
                  rider visibility, and responsible
                  riding all contribute to motorcycle
                  safety.
                </p>

              </div>

              <div className="feature">

                <div className="feature-number">
                  04
                </div>

                <h3>
                  Versatility
                </h3>

                <p>
                  Different motorcycles are designed
                  for different purposes, including
                  commuting, touring, recreation,
                  and exploration.
                </p>

              </div>

            </div>

          </section>

        </main>
      )}

      {/* =====================================================
          ABOUT
      ===================================================== */}

      {currentPage === "about" && (
        <main className="page-wrapper">

          <section className="about">

            <p className="section-label">
              ABOUT MOTO BLOG
            </p>

            <h2>
              Built For Motorcycle Enthusiasts
            </h2>

            <div className="about-content">

              <div className="about-text">

                <p>
                  Moto Blog is a dedicated online space
                  for people who are interested in
                  motorcycles, riding styles, motorcycle
                  design, and two-wheeled transportation.
                </p>

                <p>
                  We explore five popular motorcycle
                  categories: Sport Bikes, Cruisers,
                  Naked Bikes, Adventure Motorcycles,
                  and Scooters.
                </p>

                <p>
                  Our goal is to make motorcycle information
                  simple, interesting, and easy to explore.
                  Each motorcycle category has its own
                  characteristics, purpose, design, and
                  riding experience.
                </p>

                <p>
                  Whether you are interested in motorcycle
                  performance, comfortable cruising,
                  everyday commuting, or long-distance
                  exploration, Moto Blog gives you a place
                  to discover and learn about different
                  motorcycle styles.
                </p>

              </div>

              <div className="about-highlight">

                <strong>
                  5
                </strong>

                <span>
                  Motorcycle Types
                </span>

                <small>
                  One motorcycle hub
                </small>

              </div>

            </div>

          </section>

        </main>
      )}

      {/* =====================================================
          CONTACT
      ===================================================== */}

      {currentPage === "contact" && (
        <main className="page-wrapper">

          <section className="contact-section">

            <div className="page-heading">

              <p className="section-label">
                GET IN TOUCH
              </p>

              <h2>
                Contact Moto Blog
              </h2>

              <p>
                Have a question about one of our
                motorcycles or want to learn more?
                Send us a message.
              </p>

            </div>

            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                setMessageSent(true);
              }}
            >

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                  />

                </div>

              </div>

              <div className="form-group">

                <label>
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  required
                />

              </div>

              <button
                type="submit"
                className="submit-button"
              >
                Send Message →
              </button>

              {messageSent && (
                <div className="success-message">
                  ✓ Your message has been prepared successfully!
                </div>
              )}

            </form>

          </section>

        </main>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="footer-container">

          <div className="footer-brand">

            <button
              className="footer-logo"
              onClick={() => navigate("home")}
            >
              MOTO<span>BLOG</span>
            </button>

            <p>
              Motorcycles • Riding • Performance • Style
            </p>

          </div>

          <div className="footer-links">

            <button onClick={() => navigate("home")}>
              Home
            </button>

            <button onClick={() => navigate("blog")}>
              Blog
            </button>

            <button onClick={() => navigate("shop")}>
              Motorcycles
            </button>

            <button onClick={() => navigate("about")}>
              About
            </button>

            <button onClick={() => navigate("contact")}>
              Contact
            </button>

          </div>

        </div>

        <div className="copyright">
          © 2026 Moto Blog. All rights reserved.
        </div>

      </footer>

    </div>
  );
}