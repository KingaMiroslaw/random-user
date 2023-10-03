import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8">
      <h1 className="uppercase font-bold text-3xl text-[#00df9a] ">
        random user
      </h1>
      <FaMoon className="h-8 w-8  text-white" />
    </div>
  );
};
export default Navbar;
