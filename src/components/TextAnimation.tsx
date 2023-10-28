import { Cursor, useTypewriter } from "react-simple-typewriter";

const TextAnimation = () => {
  const [text] = useTypewriter({
    words: ["NAME", "EMAIL", "DATE OF BIRTH", "ADDRESS", "PHONE"],
    loop: false,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="flex flex-row justify-center text-2xl p-2">
      <p className="text-gray-500">
        Find out the{" "}
        <span className="text-gray-400 font-extrabold">{text}</span>
        <span>
          <Cursor />
        </span>
      </p>
    </div>
  );
};

export default TextAnimation;