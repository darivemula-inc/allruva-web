import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/30"
          >
            {/* Radial gradient hover effect */}
            
            <div
              className="pointer-events-none absolute -inset-px opacity-100 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <a href="#contact"><p className="relative z-20">Read More</p></a>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-36">
    <div className="container mx-auto px-6 md:px-20">
      <div className="px-90 py-36">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Allruva Technology Services,
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
        Headquartered in Lewisville, Texas, Allruva Technology Services, Inc. is dedicated to exceeding client expectations by providing top-tier global talent at affordable prices. We measure our success not by deliverables or deadlines, but by the value we bring to your business.

With a diverse team of experts from around the world, we deliver innovative, tailored solutions that help businesses grow and stay competitive in today’s fast-paced tech environment. At Allruva, we focus on building long-term relationships and creating lasting impact, ensuring that every project drives efficiency and success for our clients.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/space.mp4"
          title={
            <>
              Robotic <b>p</b>rocess <b>a</b>uto<b>ma</b>tion
            </>
          }
          description="We are experts in Robotic Process Automation (RPA), using software bots to automate repetitive tasks like data entry and form processing. Our solutions help businesses save time, reduce errors, and cut costs, all while seamlessly integrating with your existing systems without major changes"
          isComingSoon
        />
      </BentoTilt>
      <a href="#contact"></a>    
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/health.mp4"
            title={
              <>
                Health <b>c</b>are pm financials
              </>
            }
            description="Our expertise lies in streamlining healthcare project management and financial processes, such as budgeting and reporting. By leveraging automation, we assist healthcare organizations in improving efficiency, minimizing errors, and reducing costs, all while ensuring smooth integration with existing system"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/sales.mp4"
            title={
              <>
                sa<b>l</b>esfo<b>r</b>ce dev<b>lo</b>pment
              </>
            }
            description="We offer custom Salesforce development to enhance customer relationships and streamline operations."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/hero-15.mp4"
            title={
              <>
                WE<b>B</b> DEV<b>E</b>LOP<b></b>ME<b>N</b>T
              </>
            }
            description="We provide custom web development to build responsive, user-friendly websites"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              F<b>O</b>R M<b>o</b>re co<b>n</b>tact u<b>s</b>
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/hero-6.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
