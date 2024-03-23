/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import { check } from "../assets/icons";
import { checklist } from "../constants";

const Checklist = () => {
  return (
    <motion.div
      className="pt-10 flex flex-col max-lg:items-center"
      initial={{ opacity: 0, y: -75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <p className="font-palanquin italic text-off-white text-lg pb-2">
        Here&apos;s what I need from you:
      </p>
      <div>
        {checklist.map((item) => (
          <ul className="text-off-white text-lg font-palanquin italic p-0.5">
            <li className="flex gap-2">
              <span>
                <img src={check} alt="check" width={20} />
              </span>
              {item}
            </li>
          </ul>
        ))}
      </div>
    </motion.div>
  );
};

export default Checklist;
