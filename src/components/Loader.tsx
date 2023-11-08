import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Circles
        height="100"
        width="100"
        color="rgb(0,223,154)"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
