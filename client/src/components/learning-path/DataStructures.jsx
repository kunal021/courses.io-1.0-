import course from "../../data.json";

function DataStructures() {
  const courses = course.courses;
  const DSCourse = courses.filter((item) => item.learningPath === 1);
  return (
    <div className="container flex flex-col">
      <p className="mt-10 text-3xl font-black text-center">Data Structures</p>
      <div className="flex flex-wrap justify-between items-center h-full w-full">
        {DSCourse.map((item) => (
          <div
            key={item.id}
            className="border-2  rounded-xl border-gray-900 mx-6 my-14 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <iframe
                src={item.src}
                title={item.title}
                frameBorder={item.frameBorder}
                allow={item.allow}
                allowFullScreen={item.allowfullscreen}
                height={220}
                width={350}
                className="rounded-t-2xl"
              ></iframe>
              <p className="m-4 text-xl font-black text-center w-80 break-words">
                {item.courseName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataStructures;
