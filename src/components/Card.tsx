import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCalendar,
} from "react-icons/ai";
import { PiMapPinLine } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { User } from "../types/user";

type UserProps = {
  user: User;
};

const Card = ({ user }: UserProps) => {
  const birthDate = new Intl.DateTimeFormat("default", {
    timeZone: "UTC",
  }).format(new Date(user.dob.date));

  return (
    <div className="max-w-md text-white border rounded p-4">
      <h1>Let's find out about the User address</h1>
      <img src={user.picture.large} alt="user" />
      <p>
        {user.name.first} {user.name.last}
      </p>
      <p>{user.email}</p>
      <p>{birthDate}</p>
      <p>
        {user.location.postcode} {user.location.city}
      </p>
      <p>{user.cell}</p>
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
