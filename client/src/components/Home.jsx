import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col space-y-10 text-center justify-center items-center  h-[60vh] md:h-[80vh] text-3xl mx-10 sm:mx-30 md:mx-60 font-black">
      <p>Welcome to Course.io All courses at one place</p>
      <Link
        to={"/signin"}
        className="text-3xl text-white text-center m-4 font-black rounded-md border-2 border-transparent px-8 py-2 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
      >
        Continue
      </Link>
    </div>
  );
}

export default Home;
