import { FaMoon } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between  items-center h-24  px-8  ">
      <h1 className="uppercase font-bold text-3xl text-[#00df9a] ">
        random user
      </h1>
      <FaMoon className="text-white" />
    </div>
  );
};
export default Navbar;
