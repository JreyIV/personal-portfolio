import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Checklist from "../components/Checklist";
import EmailConfirm from "../components/EmailConfirm";
import { linkedin, github } from "../assets/icons";

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
          form.current.reset();
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 7000);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact-me"
      className="bg-black-gray-dark p-20 max-md:px-5 flex flex-col lg:flex-row"
    >
      <div className="flex-1 lg:mr-15 max-lg:text-center max-lg:justify-center ">
        <motion.p
          className="font-okine font-bold text-3xl max-md:text-xl text-off-white"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Don&apos;t be shy, say hello.
        </motion.p>
        <motion.h1
          className="font-okine font-bold text-8xl max-lg:text-4xl text-brand-green"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h1>
        <motion.p
          className="font-okine text-off-white text-2xl"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Let&apos;s do something great
        </motion.p>
        <Checklist />
        <div className="pt-10 flex gap-5">
          <a href="https://www.linkedin.com/in/joseph-t-reyes/" target="_blank">
            <motion.img
              src={linkedin}
              alt="linkedin"
              width={30}
              whileHover={{ scale: 1.5, rotate: 360 }}
            />
          </a>
          <a href="https://github.com/JreyIV" target="_blank">
            <motion.img
              src={github}
              alt="github"
              width={30}
              whileHover={{ scale: 1.5, rotate: 360 }}
            />
          </a>
        </div>
      </div>
      <div className="text-off-white flex-1 lg:w-1/2 mt-10 lg:mt-0">
        {isSuccess && <EmailConfirm />}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col p-20 max-md:p-5 gap-5 font-okine"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
          <motion.input
            whileTap={{ scale: 0.8 }}
            type="submit"
            value="Send"
            className="bg-brand-green p-2"
          />
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
