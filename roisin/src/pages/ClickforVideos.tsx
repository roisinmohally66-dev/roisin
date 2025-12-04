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
        <h1 className="video-page__title">Coffee Advert and Reflective Blog</h1>

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
           Before filming, we began by delegating roles within our group. I was happy to take on the role of director, as it felt like a natural fit for me. Once everyone knew their responsibilities, we needed to produce an idea for our video. Grace and I suggested doing a brainstorm so we could get all our ideas down on paper. Two concepts stood out to us at the beginning. During this stage, I tried to keep everyone grounded in their ideas by reminding the group of the spaces we actually had access to film in, and how these limitations would shape the type of story we could realistically tell.</p>

            <p>After considering the locations available to us, we decided to create a coffee advertisement that would be light-hearted with a comedic element. Our main actor would be playing a student, and the video would be set on the UL campus an environment we all have experience working in and easy access to. To keep us organised, I created storyboards for the group so that we all had a clear, shared vision of what needed to be done. My aim for production day was to make the process as simple as possible by breaking the story down into clear, consistent scenes.</p>

            <p>On the day of filming, I arrived with two slightly different storyboards for the group to consider. In our previous discussion, most people had wanted the opening scene to take place in a bedroom, so I included this in the first storyboard. However, after further reflection, I realised it would be easier and more efficient to film everything on campus. It would save time and avoid the challenges involved in using someone’s accommodation. To ensure we had options, I created an alternative storyboard that kept the entire shoot on campus while still conveying our intended message. I walked everyone through both versions, and we collectively agreed that the alternative plan would be the most practical approach.</p>

            <p>During filming, I think we did a good job of staying focused and managing our time effectively. Before each scene, I talked the group through what needed to be achieved, and everyone contributed to the plan of action so that each shot was completed successfully. The first scene was definitely the most difficult and took the longest, as we were still adjusting to the video production process. However, we didn’t let this discourage us. We persevered and handled any frustrations or pressure as a team. By the second scene, we had found our rhythm and were working efficiently together.</p>

            <p>Because we were a larger group, it was sometimes challenging to keep everyone’s creative ideas grounded. We did butt heads at times, as each of us had our own vision for how things should be done. However, I managed everyone’s opinions well while still keeping us focused and on task.</p>

            <p>I provided direction to our actor throughout filming, knowing that Grace would be able to edit out any background audio of me giving instructions. Our actor, Mughunthan, took direction very well and was always willing to repeat actions, if necessary, which made production much easier for all of us. His patience was a key factor in the success of our filming day.</p>

            <p>After completing the first rough edit, we felt that something was missing from the piece. Although we were happy with the overall structure, we knew it needed an additional element to really tie the narrative together. After discussing it as a group, Grace and I decided it would be helpful to get feedback from our lecturer. This really helped us identify the problem clearly and gave us a few ideas on how we could improve the video.</p>

            <p>Rather than bringing the entire group back together which would have required more planning and time Grace and I agreed that I would appear as an actor in an additional scene. This was easy to film between the two of us. We also decided to add a voice over at the very end to bring the story full circle and enhance the comedic tone of the video. I enlisted a friend to record a short voice-over that matched the clip of the man on screen at the end. These two slight changes made a significant difference and really brought the video together.</p>


            <p>Overall, the project was a valuable learning experience that strengthened my skills and understanding of video production. Despite the challenges, our group worked hard, adapted when needed, and ultimately produced a piece we were proud of. The process taught me the importance of clear communication, flexibility, and creative problem solving skills which are invaluable to me as designer.  
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
