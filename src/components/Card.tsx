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
    <div className="max-w-md text-white border rounded p-4">
      <h1>Let's find out about the User address</h1>
      <img src={user.picture.large} alt="user" />
      <PhraseGenerator user={user} activeLink={activeLink} />

      <div>
        <ul className="flex justify-between p-4 mt-2  ">
          {Icons.map((icon, index) => (
            <li
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
  );
};
export default Card;
