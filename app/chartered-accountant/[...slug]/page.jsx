import { Courses } from "@/components/Common/courseData";
import Link from "next/link";

const Programs = async ({ params }) => {
  const [slug] = params.slug;

  const data = Courses.filter((course) => {
    if (course.Exams) {
      return course.Exams.find((exam) => exam.parms == slug);
    }
    return false;
  });

  const data1 = data[0]?.Exams.find((item) => item.parms == slug);

  if (!data1) {
    return <div className="mt-16">page not found</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center text-2xl font-bold text-red py-8 mt-16 md:mt-0">
        {data1.title}
      </h1>

      <p className="text-lg font-light  font-montserrat text-light">
        {data1.Preparation}
      </p>

      <div className="  p-6 rounded-lg ">
        <div className="text-2xl font-bold  text-center text-red mb-10">
          Exam Details
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="text-lg text-red font-semibold">Exam Name:</div>
            <div className="text-red-500">{data1.Overview.Exam_Name}</div>
          </div>
          {data1.Overview.Scope ? (
            <div>
              <div className="text-lg text-red font-semibold">Scope:</div>
              <div>{data1.Overview.Scope}</div>
            </div>
          ) : (
            ""
          )}
          <div>
            <div className="text-lg text-red font-semibold">
              Conducting Body:
            </div>
            <div>{data1.Overview.Conducting_Body}</div>
          </div>
          <div>
            <div className="text-lg text-red font-semibold">Exam Mode:</div>
            <div>{data1.Overview.Exam_Mode}</div>
          </div>
          <div>
            <div className="text-lg text-red font-semibold">Exam Level:</div>
            <div>{data1.Overview.Exam_Level}</div>
          </div>
          <div>
            <div className="text-lg text-red font-semibold">Exam Type:</div>
            <div>{data1.Overview.Exam_Type}</div>
          </div>
          <div>
            <div className="text-lg text-red font-semibold">
              Medium of Exam:
            </div>
            <div>{data1.Overview.Medium_Exam}</div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
                {data?.Exams?.map((item) => (
                    <div className="h-[100px] text-white bg-red hover:bg-dark rounded ">
                        <p className="text-center text-lg mb-1 mt-4">{item.title}</p>
                        <div className="flex justify-center items-center ">
                            <Link href={`/programs/subprogram/${item.parms}`} className="text-center uppercase text-[10px] text-white hover:bg-red rounded px-3 py-1 border">View Details</Link>
                        </div>
                    </div>
                ))}
            </div> */}
    </div>
  );
};

export default Programs;
