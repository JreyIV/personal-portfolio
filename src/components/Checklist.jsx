/* eslint-disable react/jsx-key */
import { check } from "../assets/icons";
import { checklist } from "../constants";

const Checklist = () => {
  return (
    <div className="pt-10 flex flex-col max-lg:items-center">
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
    </div>
  );
};

export default Checklist;
