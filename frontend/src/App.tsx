import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import Admin from "./Admin";
import AdminLogin from "./AdminLogin";

  function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  if (window.location.pathname === "/admin") {
  const isLoggedIn = localStorage.getItem("adminLoggedIn");

  if (isLoggedIn !== "true") {
    return <AdminLogin />;
  }

  return <Admin />;
}

  return (
    <div className="website">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            Balaram<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Get Started <ArrowRight size={17} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main id="home">
        <section className="hero">
          <div className="hero-container">

            <div className="hero-content">
              <div className="hero-badge">
                <span></span>
                Web Development Company
              </div>

              <h1>
                We Build Websites
                <br />
                That <span>Grow Businesses.</span>
              </h1>

              <p>
                Professional, responsive and modern websites designed
                to help your business build a strong online presence.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="primary-button">
                  Start Your Project
                  <ArrowRight size={18} />
                </a>

                <a href="#services" className="secondary-button">
                  Explore Services
                </a>
              </div>

              <div className="hero-trust">
                <div>
                  <strong>₹3,999+</strong>
                  <span>Starter Website</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Responsive Design</span>
                </div>

                <div>
                  <strong>7 Days</strong>
                  <span>Support</span>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-top">
                <span>STARTER</span>
                <span>₹3,999+</span>
              </div>

              <div className="card-line"></div>

              <h3>Business Website</h3>

              <p>
                Everything you need to establish your business online.
              </p>

              <div className="feature-list">
  <div>✓ Responsive Design</div>
  <div>✓ Modern UI</div>
  <div>✓ 3 Pages</div>
  <div>✓ WhatsApp Integration</div>
  <div>✓ Google Maps</div>
  <div>✓ Social Media Integration</div>
  <div>✓ Contact Form</div>
  <div>✓ Basic SEO</div>
  <div>✓ 7 Days Support</div>
</div>

              <a href="#contact" className="card-button">
                Get Started <ArrowRight size={17} />
              </a>
            </div>

          </div>
        </section>
      </main>

            {/* About */}
      <section id="about" className="about-section">
        <div className="section-container">

          <div className="about-content">
            <div className="section-badge">
              ABOUT US
            </div>

            <h2>
              We create websites that
              <span> make businesses stand out.</span>
            </h2>

            <p>
              Balaram Web Development Company helps small businesses,
              startups and professionals build a strong online presence
              with modern and responsive websites.
            </p>

            <p>
              Our focus is simple — clean design, smooth user experience
              and a website that clearly represents your business.
            </p>

            <a href="#contact" className="primary-button">
              Work With Us
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="about-card">
            <div className="about-card-number">01</div>
            <h3>Professional Design</h3>
            <p>
              Clean and modern interfaces designed around your business
              identity.
            </p>

            <div className="about-card-line"></div>

            <div className="about-card-number">02</div>
            <h3>Responsive Experience</h3>
            <p>
              Your website works smoothly across mobile, tablet and desktop.
            </p>
          </div>

        </div>
      </section>

            {/* Services */}
      <section id="services" className="services-section">
        <div className="services-container">

          <div className="services-heading">
            <div className="section-badge">
              OUR SERVICES
            </div>

            <h2>
              Everything you need to
              <span> build your online presence.</span>
            </h2>

            <p>
              Simple, professional and affordable web solutions designed
              for small businesses, startups and professionals.
            </p>
          </div>

          <div className="services-grid">

            <div className="service-card">
              <div className="service-number">01</div>
              <h3>Modern Website Design</h3>
              <p>
                Clean and professional website design that represents
                your business and builds customer trust.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>
              <h3>Responsive Development</h3>
              <p>
                Websites optimized to work smoothly across mobile,
                tablet and desktop devices.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>
              <h3>WhatsApp Integration</h3>
              <p>
                Make it easy for customers to contact your business
                directly through WhatsApp.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>
              <h3>Google Maps Integration</h3>
              <p>
                Help customers quickly find your business location
                with Google Maps integration.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">05</div>
              <h3>Basic SEO</h3>
              <p>
                Essential SEO setup to help your website have a
                stronger foundation for search visibility.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">06</div>
              <h3>Social Media Integration</h3>
              <p>
                Connect your website with your business social media
                profiles for easier customer engagement.
              </p>
            </div>

          </div>

        </div>
      </section>

            {/* Pricing */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">

          <div className="pricing-heading">
            <div className="section-badge">
              STARTER PACKAGE
            </div>

            <h2>
              A professional website,
              <span> without the high cost.</span>
            </h2>

            <p>
              Everything you need to establish your business online
              with a clean, modern and responsive website.
            </p>
          </div>

          <div className="pricing-card">

            <div className="pricing-top">
              <div>
                <span className="pricing-label">STARTER BUSINESS WEBSITE</span>

                <h3>
                  ₹3,999<span>+</span>
                </h3>
              </div>

              <div className="pricing-badge">
                POPULAR
              </div>
            </div>

            <div className="pricing-divider"></div>

            <div className="pricing-features">

              <div>✓ Responsive Design</div>
              <div>✓ Modern UI</div>
              <div>✓ 3 Pages</div>
              <div>✓ WhatsApp Integration</div>
              <div>✓ Google Maps</div>
              <div>✓ Social Media Integration</div>
              <div>✓ Contact Form</div>
              <div>✓ Basic SEO</div>
              <div>✓ Basic Testimonials & FAQ</div>
              <div>✓ Basic Performance Optimization</div>
              <div>✓ Basic Security Setup</div>
              <div>✓ Deployment</div>
              <div>✓ 7 Days Support</div>

            </div>

            <a href="#contact" className="primary-button pricing-button">
              Start Your Project
              <ArrowRight size={18} />
            </a>

          </div>

        </div>
      </section>

            {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-container">

          <div className="testimonials-heading">
            <div className="section-badge">
              CLIENT FEEDBACK
            </div>

            <h2>
              What our clients
              <span> say about us.</span>
            </h2>
          </div>

          <div className="testimonials-grid">

            <div className="testimonial-card">
              <div className="testimonial-stars">
                ★★★★★
              </div>

              <p>
                “Professional design, smooth communication and a
                website that looks great on mobile.”
              </p>

              <div className="testimonial-client">
                <strong>Business Client</strong>
                <span>Small Business Owner</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                ★★★★★
              </div>

              <p>
                “The website was simple, modern and exactly what
                we needed to present our business online.”
              </p>

              <div className="testimonial-client">
                <strong>Business Client</strong>
                <span>Startup Owner</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                ★★★★★
              </div>

              <p>
                “Easy to work with and the final website gave our
                business a much more professional online presence.”
              </p>

              <div className="testimonial-client">
                <strong>Business Client</strong>
                <span>Professional</span>
              </div>
            </div>

          </div>

        </div>
      </section>

            {/* FAQ */}
      <section className="faq-section">
        <div className="faq-container">

          <div className="faq-heading">
            <div className="section-badge">
              FAQ
            </div>

            <h2>
              Frequently asked
              <span> questions.</span>
            </h2>

            <p>
              Here are some common questions about our Starter
              Business Website package.
            </p>
          </div>

          <div className="faq-list">

            <details className="faq-item">
              <summary>
                What is included in the ₹3,999+ package?
              </summary>

              <p>
                The Starter package includes a responsive website,
                modern UI, 3 pages, WhatsApp integration, Google Maps,
                social media integration, contact form, basic SEO,
                deployment and 7 days support.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                How many pages are included?
              </summary>

              <p>
                The Starter package includes 3 pages. The exact pages
                can be discussed according to your business requirements.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Will the website work on mobile?
              </summary>

              <p>
                Yes. The website is designed to work across mobile,
                tablet and desktop devices.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Is WhatsApp integration included?
              </summary>

              <p>
                Yes. WhatsApp integration is included in the Starter
                Business Website package.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                How can I start my project?
              </summary>

              <p>
                Click the Start Your Project button and send your
                requirements through the contact form.
              </p>
            </details>

          </div>

        </div>
      </section>

            {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-container">

          <div className="contact-content">
            <div className="section-badge">
              GET IN TOUCH
            </div>

            <h2>
              Have a project in
              <span> mind?</span>
            </h2>

            <p>
              Tell us about your business and your website requirements.
              We will get back to you and discuss the project with you.
            </p>

            <div className="map-container">
  <iframe
  src="https://www.google.com/maps?q=Midnapore,West+Bengal,India&output=embed"
  width="100%"
  height="280"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Balaram Web Development Company - Midnapore"
></iframe>
</div>

            <div className="contact-details">

              <div className="contact-item">
                <strong>Email</strong>
                <span>tapasmobdal49@gmail.com</span>
              </div>

              <div className="contact-item">
                <strong>Phone / WhatsApp</strong>
                <span>+91 9242408124</span>
              </div>

              <div className="contact-item">
                <strong>Service</strong>
                <span>Starter Business Website — ₹3,999+</span>
              </div>

            </div>
          </div>

          <div className="contact-card">

            <h3>Start Your Project</h3>

            <p>
              Send us your details and we will contact you.
            </p>

            <form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you! Your enquiry has been submitted successfully. We will contact you shortly.");
        form.reset();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to send enquiry. Please try again.");
    }
  }}
>

              <input
  type="text"
  name="name"
  placeholder="Your Name"
  required
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  required
/>

<input
  type="tel"
  name="phone"
  placeholder="Phone / WhatsApp Number"
  required
/>

<textarea
  name="message"
  placeholder="Tell us about your project..."
  rows={5}
  required
></textarea>

              <button type="submit" className="primary-button">
                Send Enquiry
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>
      </section>

            {/* Footer */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-brand">
            <a href="#" className="logo">
              Balaram<span>.</span>
            </a>

            <p>
              Professional websites for businesses,
              startups and professionals.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-copy">
            © 2026 Balaram Web Development Company.
            All rights reserved.
          </div>

        </div>
      </footer>

            {/* WhatsApp Button */}
      <a
  href="https://wa.me/919242401241"
  target="_blank"
  rel="noreferrer"
  className="whatsapp-button"
  aria-label="Chat on WhatsApp"
>
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M16.02 3C8.84 3 3 8.82 3 15.98c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.7a13 13 0 0 0 6.32 1.62h.01C23.19 28.92 29 23.1 29 15.98 29 8.82 23.2 3 16.02 3Zm0 23.6h-.01c-1.98 0-3.92-.53-5.62-1.54l-.4-.24-3.97 1.01 1.06-3.86-.26-.4a10.74 10.74 0 1 1 9.2 5.03Zm5.9-8.05c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.22-.38.24-.7.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.16.22 2.3 3.5 5.57 4.91.78.34 1.39.55 1.86.7.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z"
    />
  </svg>

  <span>WhatsApp</span>
</a>

    </div>
  );
}

export default App;