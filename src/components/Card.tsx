import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCalendar,
} from "react-icons/ai";
import { PiMapPinLine } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";

const Card = () => {
  return (
    <div className="max-w-md text-white border rounded p-4">
      <h1>Let's find out about the User address</h1>
      <div>User picture</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
