import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { User } from "./types/user";

type ThemeOptions = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<ThemeOptions>(
    localStorage.getItem("theme")
      ? (localStorage.getItem("theme") as ThemeOptions)
      : "light"
  );
  const [user, setUser] = useState<User | null>(null);

  const fetchUserData = useCallback(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0] ?? null));
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="min-h-screen flex flex-col mx-auto dark:bg-[#000300]">
      <Navbar handleTheme={handleTheme} theme={theme} />
      <div className=" flex flex-col justify-center items-center flex-1">
        {user ? <Card user={user} /> : null}
        <button
          className="bg-[#00df9a] hover:bg-[indigo] text-gray-700 hover:text-white rounded mx-auto w-48 mt-10 py-1 uppercase font-bold pointer dark:hover:bg-[indigo] dark:hover:text-white"
          onClick={fetchUserData}
        >
          Change User
        </button>
      </div>
    </main>
  );
};

export default App;
