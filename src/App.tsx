import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const App: React.FC = () => {
  const [user, setUser] = useState([]);

  const fetchUserData = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(user); // to delete

  return (
    <main className="min-h-screen flex  flex-col max-w-[1240px] mx-auto ">
      <Navbar />
      <div className=" flex flex-col justify-center items-center flex-1">
        <Card />
        <button
          className="bg-[#00df9a] rounded mx-auto w-48 mt-10 py-1 uppercase font-bold pointer"
          onClick={fetchUserData}
        >
          Change User
        </button>
      </div>
    </main>
  );
};

export default App;
