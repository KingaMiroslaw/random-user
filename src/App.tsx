import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <main className="min-h-screen flex  flex-col max-w-[1240px] mx-auto">
      <Navbar />
      <div className="flex justify-center items-center  px-8  flex-1 ">
        <Card />
      </div>
    </main>
  );
}

export default App;
