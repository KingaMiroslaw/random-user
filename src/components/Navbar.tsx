import { FaMoon } from "react-icons/fa";

type ThemeProps = {
  handleTheme: () => void;
};

const Navbar = ({ handleTheme }: ThemeProps) => {
  return (
    <div className="flex flex-row justify-between  items-center h-24  px-12  ">
      <h1 className="uppercase font-bold text-3xl text-[#00df9a] ">
        random user
      </h1>
      <FaMoon className="dark:text-white text-[indigo]" onClick={handleTheme} />
    </div>
  );
};
export default Navbar;
