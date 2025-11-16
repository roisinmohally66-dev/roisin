import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ClickForImages.css";

import placeholder1 from "../Assets/Headshot.jpeg";
import placeholder2 from "../Assets/Aestshot.jpeg";
import placeholder3 from "../Assets/Passion .jpeg";

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
    info: "My thought process behind this photo centred mainly around the lighting. I knew I needed to find a space with defused natural light in order to achieve my vision for this photograph. I also wanted the background for my headshot to be somewhat interesting for viewers whilst also remaining professional. I knew I wanted to steer clear from a plain background as I still wanted my photo to be somewhat intriguing and translate a little bit of creativity to my viewer as I am an artist primarily. I settled on taking my headshot in the UL concert hall as the glass roof in that space aided perfectly towards my  lighting requirements. I also knew there was many different textured walls in that space that I could utilise for my background. I shot my photograph with auto focus to ensure the subject was fully in focus resulting in a crisp headshot. I used a wide aperture to create some blur in the background of the image to make sure the subject was the focal point. I kept my shutter speed high enough to freeze the moment keeping the photograph as crisp as possible. When editing my photograph, I used a selection tool to just select the subject and apply a few edits to my face only. I really liked the gradient happening in the background of my image and I didn’t want to mess with that at all. There also was not much editing needed to correct this image, so I thought this decision was the perfect way to keep editing minimal. My headshot translates an air of sophistication whilst having an energetic creative quality that speaks to my viewer.",
    alt: "Formal headshot",
  },
  {
    src: placeholder2,
    title: "An Aesthetic Shot",
    info: "For my aesthetic shot I decided to head down to the river at sun set to get some photographs of the swans. It had been a really rainy day and there was an hour before the sun went in that the rain had eased off so I took my opportunity. I knew these weather conditions would give my images a nice dreamy quality as the sun was both setting and breaking through the clouds. At first I was solely focused on the swans and I was using the zoom on my camera to try and get as close as possible but when I finally stood back and looked at the scene as a whole I noticed the double rainbow peeking through and being reflected in the river. I knew then and there, that was the shot so I honed in on the full landscape keeping the rainbow at the centre of the image. I was trying to capture as much colour as I could to give me as much choices as possible for later when I went to edit it. I also managed to keep the swan in the photograph framing it amongst the foliage on the left-hand side of the image. When taking this photograph, it really forced me to take a step back and look at the larger scene which reminded me to not get so stuck in my creative idea and let what is happening around me influence my creativity. I took this photograph with a medium aperture to reduce the background blurring as I wanted the full landscape to be in focus. I shot with an iOS of 100 to keep the shot clean and as noise free as possible. This resulted in a photograph that is very aesthetically pleasing to look at for my viewer. This image translates the epitome of Irish weather and the Irish landscape although it was raining for the majority of that day the sun found its way out against all the odds.",
    alt: "Aesthetic shot",
  },
  {
    src:  placeholder3,
    title: "A Shot That Reflects My Passion In Life",
    info: "My passions in life include travel, art and culture. In this image I created a still life shot to express these three important things in my life. I used items that I have collected on my travels including a map, a postcard and a book titled ‘Voyages.’ I used a miniature mask to translate the idea of culture to the viewer. I also included a handmade pot with pint brushes and pencils falling out of it to display my love of art. I wanted to create a still life for this photograph so that all my images had something distinct and different about them. I also thought a still life of personal objects would be the best way to translate my passions in life to my viewers as I believe passion is very personal to the individual. I used a lamp to create the warm lighting. I defused and directed the light with some paper. I enjoyed being able to control and play with the lighting as it was something I didn’t have control over in the first two images. I shot this in manual focus as I wanted to have full control of what was in focus and what was out of focus. I wanted to control my viewers eye-line to make them see what I wanted them to see, and manual focus helped me achieve this. I shot the image with a slow shutter speed as I was able to hold the camera very still and there was no risk of motion blur. When editing I wanted to sharpen the textures in the image. I also played more with the brightness and contrast to get to the final product. This photograph reflects me, my personality, and the things that I value in my life. It is an interesting image rich with objects that tell a story.",
    alt: "Passion shot",
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
