// src/App.tsx
import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ArtistStatement from "./pages/ArtistStatement";
import Exhibitions from "./pages/Exhibitions";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import ClickforImages from "./pages/ClickforImages";
import ClickforVideos from "./pages/ClickforVideos";
import roisinheadshot from "./Assets/roisinheadshot.jpg";
import brownsculpture from "./Assets/brownsculpture.jpg";

function HomePage() {
  return (
    <div className="site">
      <header className="hero">
        <img
          className="hero-img left"
          src={roisinheadshot}
          alt="Róisín Mohally headshot"
          loading="lazy"
          width={400}
          height={400}
        />

        <nav className="hero-nav" aria-label="primary">
          <Link to="/artist-statement">Artists Statement</Link>
          <span aria-hidden="true">|</span>
          <Link to="/exhibitions">Exhibitions</Link>
          <span aria-hidden="true">|</span>
          <Link to="/awards">Awards</Link>
          <span aria-hidden="true">|</span>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>


      <main className="main">
        <section className="panel media-panel" aria-labelledby="media-title">
          <figure className="feature-thumb">
            <img
              src={brownsculpture}
              alt="Detail from exhibition (placeholder)"
              loading="lazy"
              width={600}
              height={400}
            />
          </figure>
                
          <div className="cta-stack">
             <Link className="cta" to="/ClickforImages" role="button">Click for Images</Link>
              <Link className="cta" to="/ClickforVideos" role="button">Click for Videos
              </Link>
              </div>
              </section>

        <div className="v-divider" aria-hidden="true" />

        <section className="panel about" aria-labelledby="about-title">
          <h2 id="about-title">About Me</h2>
          <p>
            Hi, my name is Róisín Mohally. I am an artist and designer from Cork, Ireland. I graduated
            from Crawford College of Art and Design (MTU) in 2023 with a degree in Fine Art.
          </p>
          <p>
            I am currently completing a master’s degree in Interaction Experience Design at the
            University of Limerick. Please feel free to contact me with any queries!
          </p>
        </section>
      </main>

      
      <footer className="footer" id="contact">
        <a className="contact-chip" href="tel:+353876228591" aria-label="Call +353 87 622 8591">
          {PhoneIcon()}
          <span>+353 87 622 8591</span>
        </a>
        <a className="contact-chip" href="mailto:roisinmohally66@gmail.com" aria-label="Email">
          {MailIcon()}
          <span>roisinmohally66@gmail.com</span>
        </a>
        <a
          className="contact-chip"
          href="https://www.instagram.com/roisinmohally_art"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          {InstagramIcon()}
          <span>@roisinmohally_art</span>
        </a>
      </footer>
    </div>
  );
}


function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.63a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.31 1.73.53 2.63.65A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4l8 5 8-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/roisin">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artist-statement" element={<ArtistStatement />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ClickforImages" element={<ClickforImages />} />
        <Route path="/ClickforVideos" element={<ClickforVideos />} />

        <Route
          path="*"
          element={<main style={{ color: "white", padding: 24 }}>Page not found</main>}
        />
      </Routes>
    </BrowserRouter>
  );
}
