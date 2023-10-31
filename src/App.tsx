import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { User } from "./types/user";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [user, setUser] = useState<User | null>(null);

  const fetchUserData = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0] ?? null));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="min-h-screen flex flex-col mx-auto dark:bg-[#000300]">
      <Navbar handleTheme={handleTheme} />
      <div className=" flex flex-col justify-center items-center flex-1">
        {user ? <Card user={user} /> : null}
        <button
          className="bg-[#00df9a] hover:bg-[indigo] text-gray-700 hover:text-white rounded mx-auto w-48 mt-10 py-1 uppercase font-bold pointer   dark:bg-gradient-to-r dark:hover:from-[#00df9a] dark:hover:to-white dark:hover:text-gray-800 "
          onClick={fetchUserData}
        >
          Change User
        </button>
      </div>
    </main>
  );
};

export default App;
