import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { useState } from "react";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xeoopdlq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      setFormStatus("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Left decorative images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="/img/con1.jpg" clipClass="contact-clip-path-1" />
          <ImageClipBox
            src="/img/con1.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        {/* Right decorative images */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src=""
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/con1.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">Join with Us</p>

          <AnimatedTitle
            title="let&#39;s i<b>nn</b>o<b>va<b></b>te and <br />build the future<br />t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          {/* Company Address */}
          <div className="mt-8 text-center">
            <p className="text-sm font-medium">
              <strong>Allruva Technology Services, Inc</strong>
              <br />
              6210 N Beltline Rd, Suite# 153,
              <br />
              Irving, TX 75063,
              <br />
              Email: askus@allruva.com
              <br/>
              Phone: +1 (469) 390-0215
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col items-center gap-4 w-full max-w-lg"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full rounded-md border border-gray-300 bg-black px-4 py-2 text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-md border border-gray-300 bg-black px-4 py-2 text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How Can We Help?"
              rows="5"
              className="w-full rounded-md border border-gray-300 bg-black px-4 py-2 text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <Button title={isSubmitting ? "Sending..." : "Submit"} containerClass="cursor-pointer" />
          </form>

          {/* Form Status Message */}
          {formStatus && (
            <p className="mt-5 text-sm font-medium text-green-500">{formStatus}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
