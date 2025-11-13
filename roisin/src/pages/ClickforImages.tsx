import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ClickForImages.css";

import placeholder1 from "../Assets/placeholder1.JPG";
import placeholder2 from "../Assets/placeholder2.JPG";
import placeholder3 from "../Assets/placeholder3.JPG";

type ImageItem = {
  src: string;
  title: string;
  info: string;
  alt: string;
};

const items: ImageItem[] = [
  {
    src: placeholder1,
    title: "A Formal Business Headshot",
    info: "Golden-hour shot on the river. 85mm prime, f/2.8, 1/800s, ISO 200.",
    alt: "A white bird flying over the sea",
  },
  {
    src: placeholder2,
    title: "An Aesthetic Shot",
    info: "Double rainbow over flooded fields. 24mm, f/5.6. Edited in Lightroom.",
    alt: "Many birds on rocks beside the sea",
  },
  {
    src: placeholder3,
    title: "A Shot That Reflects My Passion In Life",
    info: "Spotted on a car roof after a local parade. 50mm, f/2.0.",
    alt: "Two puffins standing on grass",
  },
];

export default function ClickforImages(): React.ReactElement {
  const [active, setActive] = useState<ImageItem | null>(null);

  const closeLightbox = () => setActive(null);

  return (
    <main className="images-page">
      <nav className="topbar">
        <Link to="/" className="back-btn">
          ← Back Home
        </Link>
      </nav>

      <h1 className="page-title">Images</h1>

      <section className="image-grid" aria-label="Photo gallery">
        {items.map((it, i) => (
          <figure
            className="card"
            key={i}
            onClick={() => setActive(it)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(it);
            }}
          >
            <div className="frame">
              <img src={it.src} alt={it.alt} loading="lazy" />
            </div>
            <figcaption className="caption">
              <h3 className="caption-title">{it.title}</h3>
              <p className="caption-info">{it.info}</p>
            </figcaption>
          </figure>
        ))}
      </section>

      {active && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            <img
              src={active.src}
              alt={active.alt}
              className="lightbox-img"
            />
          </div>
        </div>
      )}
    </main>
  );
}
