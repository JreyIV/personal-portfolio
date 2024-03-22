import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Checklist from "../components/Checklist";
import EmailConfirm from "../components/EmailConfirm";

const Contact = () => {
  const form = useRef();

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_haca34j", "template_ukwasz5", form.current, {
        publicKey: "33np_gXTrJ4vzyVZm",
      })
      .then(
        () => {
          setIsSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="bg-black-gray-dark p-20 max-md:px-5 flex flex-col lg:flex-row">
      <div className="flex-1 lg:mr-15 max-lg:text-center max-lg:justify-center ">
        <p className="font-okine font-bold text-3xl max-md:text-xl text-off-white">
          Don&apos;t be shy, say hello.
        </p>
        <h1 className="font-okine font-bold text-8xl max-lg:text-4xl text-brand-green">
          Contact Me
        </h1>
        <p className="font-okine text-off-white text-2xl">
          Let&apos;s do something great
        </p>
        <Checklist />
      </div>
      <div className="text-off-white flex-1 lg:w-1/2 mt-10 lg:mt-0">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col p-20 max-md:p-5 gap-5 font-okine"
        >
          <input
            type="text"
            name="from_name"
            placeholder="name"
            className="bg-black-gray-dark p-2 border-b"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="email address"
            className="bg-black-gray-dark p-2 border-b"
            required
          />
          <textarea
            name="message"
            placeholder="your message"
            className="bg-black-gray-dark h-[10rem] p-2 border"
            required
          />
          <input type="submit" value="Send" className="bg-brand-green p-2" />
        </form>
        {isSuccess && <EmailConfirm />}
      </div>
    </section>
  );
};

export default Contact;
