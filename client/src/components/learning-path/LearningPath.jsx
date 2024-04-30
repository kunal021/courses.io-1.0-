import { Link } from "react-router-dom";

function LearningPath() {
  return (
    <div className="flex justify-center items-center w-full h-full my-20">
      <div className="flex flex-col justify-center items-center rounded-lg border-2 border-black ">
        <p className="text-4xl font-bold p-14">Data Structures</p>
        <Link
          to={"/data-structures"}
          className="text-4xl text-white text-center m-4 font-black rounded-md border-2 border-transparent px-10 py-2 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
        >
          GO
        </Link>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LearningPath;
