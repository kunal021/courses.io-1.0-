import course from "../../data.json";

function WebDevelopement() {
  const courses = course.courses;
  const WDCourse = courses.filter((item) => item.learningPath === 2);
  return (
    <div className="flex flex-col">
      <p className="mt-10 text-5xl font-black text-center">Web Developement</p>
      <div className="flex flex-wrap justify-between items-center h-full w-full">
        {WDCourse.map((item) => (
          <div
            key={item.id}
            className="border-2 rounded-2xl border-gray-400 mx-10 my-14"
          >
            <div className="flex flex-col items-center">
              <iframe
                src={item.src}
                title={item.title}
                frameBorder={item.frameBorder}
                allow={item.allow}
                allowFullScreen={item.allowfullscreen}
                height={280}
                width={430}
                className="rounded-t-2xl"
              ></iframe>
              <p className="m-4 text-3xl font-black text-center w-80 break-words">
                {item.courseName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebDevelopement;
