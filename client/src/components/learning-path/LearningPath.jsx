import { Link } from "react-router-dom";

function LearningPath() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-x-6 w-full h-full my-20">
      <div className="flex flex-col justify-center items-center rounded-lg border-2 border-black mt-5">
        <p className="text-3xl font-bold p-14 text-center w-80">
          Data Structures
        </p>
        <Link
          to={"/data-structure"}
          className="text-3xl text-white text-center m-4 font-black rounded-md border-2 border-transparent px-8 py-2 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
        >
          GO
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center rounded-lg border-2 border-black ">
        <p className="text-3xl font-bold p-14 text-center w-80">
          Web Developement
        </p>
        <Link
          to={"/web-developement"}
          className="text-3xl text-white text-center m-4 font-black rounded-md border-2 border-transparent px-8 py-2 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
        >
          GO
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center rounded-lg border-2 border-black ">
        <p className="text-3xl font-bold p-14 text-center w-80">
          Machine Learning
        </p>
        <Link
          to={"/machine-learning"}
          className="text-3xl text-white text-center m-4 font-black rounded-md border-2 border-transparent px-8 py-2 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
        >
          GO
        </Link>
      </div>
    </div>
  );
}

export default LearningPath;
