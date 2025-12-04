<<<<<<< HEAD
import React from "react";
import "./ClickForVideos.css";

import production1 from "../Assets/production1.jpeg";
import production2 from "../Assets/production2.jpeg";
import production3 from "../Assets/production3.jpeg";


const ClickForVideos: React.FC = () => {
  return (
    <div className="video-page">

      {/* Back Button */}
      <a href="/" className="video-page__back-btn">
        ← Back Home
      </a>

      <main className="video-page__content">

        {/* Page Title */}
        <h1 className="video-page__title">Video Project Title</h1>

        {/* YouTube Embed */}
        <section className="video-page__video">
          <div className="video-page__video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/hGXjlXMoMAo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Description Text */}
        <section className="video-page__blog">
          <p>
            This is placeholder text for your video description. Talk about the
            concept, your role, the brief, and what you were trying to achieve.
          </p>

          <p>
            You can describe the shoot, locations, collaborators, and any
            interesting challenges or technical choices you made.
          </p>

          <p>
            Finally, reflect on what you learned from the project and what you
            would like viewers to notice when they watch the video.
          </p>
        </section>

        {/* Images from the set — swapped order */}
        <section className="video-page__images">
          <img src={production1} alt="Production still 1" className="video-page__image" />
          <img src={production3} alt="Production still 3" className="video-page__image" />
          <img src={production2} alt="Production still 2" className="video-page__image" />
        </section>

      </main>
    </div>
  );
};

export default ClickForVideos;
=======
import { Link } from "react-router-dom";

export default function Videos() {
  return (
    <main
      style={{
        padding: "2rem",
        background: "#0f0f10",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <div style={{ textAlign: "left", marginBottom: "2rem" }}>
        <Link
          to="/"
          style={{
            backgroundColor: "#ffffff",
            color: "#0f0f10",
            padding: "8px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          ← Back to Home
        </Link>
      </div>

      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Videos</h1>
      <p style={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
        This page will showcase my video work.
      </p>
    </main>
  );
}
>>>>>>> 9a08ae2e84aeff0bbd59e2f9c971168f5acc75e7
