import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

gsap.registerPlugin();

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  const totalVideos = 11; // Number of available videos

  // Function to select a random video index
  const getRandomVideoIndex = () => Math.floor(Math.random() * totalVideos) + 1;

  // Randomly select a video to play
  const randomVideoSrc = `videos/hero-${getRandomVideoIndex()}.mp4`;

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* Loading animation */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <video
          ref={videoRef}
          src={randomVideoSrc}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Inno<b>va</b>tion
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Empo<b>we</b>ring
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Allruva's custom applications give you the tools needed to increase
              efficiency, productivity, and success<br />
            </p>
            <a href="#about">
            <Button
              id="Learn More"
              title="Learn More"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
            </a>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        Inno<b>va</b>tion
      </h1>
    </div>
  );
};

export default Hero;
