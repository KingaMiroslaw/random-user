import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

type ThemeProps = {
  handleTheme: () => void;
  theme: string;
};

const Navbar = ({ handleTheme, theme }: ThemeProps) => {
  return (
    <div className="flex flex-row justify-between  items-center h-24 mx-8   lg:mx-44  ">
      <h1 className="uppercase font-bold text-3xl text-[#00df9a] ">
        random user
      </h1>
      {theme === "light" ? (
        <FaMoon className=" text-[indigo]" onClick={handleTheme} />
      ) : (
        <IoSunnySharp className="text-white " onClick={handleTheme} />
      )}
    </div>
  );
};
export default Navbar;
