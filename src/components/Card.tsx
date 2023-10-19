import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCalendar,
} from "react-icons/ai";
import { PiMapPinLine } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { User } from "../types/user";
import PhraseGenerator from "./PhraseGenerator";

type UserProps = {
  user: User;
};

const Card = ({ user }: UserProps) => {
  return (
    <div className="max-w-md text-white border rounded p-4">
      <h1>Let's find out about the User address</h1>
      <img src={user.picture.large} alt="user" />
      <PhraseGenerator user={user} />
      <div className="flex justify-between p-4 mt-2">
        <AiOutlineUser />
        <AiOutlineMail />
        <AiOutlineCalendar />
        <PiMapPinLine />
        <BsTelephone />
      </div>
    </div>
  );
};
export default Card;
