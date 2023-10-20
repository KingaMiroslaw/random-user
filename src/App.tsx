import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { User } from "./types/user";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUserData = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0] ?? null));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(user); // to delete

  return (
    <main className="min-h-screen flex  flex-col max-w-[1240px] mx-auto">
      <Navbar />
      <div className=" flex flex-col justify-center items-center flex-1">
        {user ? <Card user={user} /> : null}
        <button
          className="bg-[#00df9a] rounded mx-auto w-48 mt-10 py-1 uppercase font-bold pointer bg-gradient-to-r hover:from-[#00df9a] hover:to-white hover:text-gray-800 "
          onClick={fetchUserData}
        >
          Change User
        </button>
      </div>
    </main>
  );
};

export default App;
