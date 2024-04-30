import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center m-20 text-5xl font-black">
      <Link to={"/courses"}>Courses</Link>
    </div>
  );
}

export default Home;
