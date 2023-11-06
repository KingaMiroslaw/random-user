import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCalendar,
} from "react-icons/ai";
import { PiMapPinLine } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { User } from "../types/user";
import { useState } from "react";
import PhraseGenerator from "./PhraseGenerator";
import TextAnimation from "./TextAnimation";

type UserProps = {
  user: User;
};
const Icons = [
  <AiOutlineUser />,
  <AiOutlineMail />,
  <AiOutlineCalendar />,
  <PiMapPinLine />,
  <BsTelephone />,
];

const Card = ({ user }: UserProps) => {
  const [activeLink, setActiveLink] = useState(0);

  const activeLinkHandler = (index: number) => {
    setActiveLink(index);
  };

  return (
    <div className="max-w-lg  w-full">
      <div className=" mx-4 sm:mx-0 bg-gray-300/50 dark:bg-[#000300] border rounded-3xl border-gray-800/50 shadow-gray-800/50 dark:border-indigo-500/50 p-8 shadow-lg dark:shadow-indigo-500/50 ">
        <TextAnimation />
        <div className="flex justify-center my-8">
          <div className=" w-32 h-32 bg-[#00df9a] rounded-lg  relative  bottom-3 right-4" />
          <img
            src={user.picture.large}
            alt="user"
            className="rounded-lg absolute"
          />
        </div>
        <PhraseGenerator user={user} activeLink={activeLink} />
        <div>
          <ul className="flex justify-between p-4 mt-2 ">
            {Icons.map((icon, index) => (
              <li
                className="fill-current text-gray-500 hover:text-[#00df9a]"
                key={index}
                onMouseEnter={() => {
                  activeLinkHandler(index);
                }}
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Card;
