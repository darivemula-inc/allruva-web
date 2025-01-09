import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4; // Total number of videos to cycle through
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos) {
      setLoading(false);
    }
  }, [loadedVideos]);

  // Dynamically generate video source based on the index
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  useEffect(() => {
    // Cycle the videos when a video finishes loading
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalVideos);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
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
        <VideoPreview>
          <video
            ref={videoRef}
            src={getVideoSrc(currentIndex + 1)} // Get the correct video based on index
            loop
            muted
            autoPlay
            id="current-video"
            className="size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </VideoPreview>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Inno<b>va</b>tion
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Empo<b>we</b>ring
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Allruva's custom applications give you the tools needed to increase efficiency, productivity, and success<br />
            </p>

            <Button
              id="Learn More"
              title="Learn More"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
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
