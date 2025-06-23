import React, { useEffect, useState } from "react";
import Countdown from "../Countdown/Countdown";

const Quiz = ({ subject, course }) => {
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(null));
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [paper, setPaper] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [filter, setFilter] = useState(false);
  const [studentData, setStudentData] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    subject: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/quiz/get-single-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course, subject }),
      });
      if (response.ok) {
        const result = await response.json();
        setQuestions(result);
        const apppaper = result.map((cors) => cors?.paper);
        const unikCourse = new Set(apppaper);
        const allpapers = Array.from(unikCourse);
        setPaper(allpapers);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(questionCount);
  const handleSubmit = async (e) => {
    if (formData.phonenumber.length == 10) {
      localStorage.setItem("studentData", JSON.stringify(formData));
      setQuizStarted(true);
    } else {
      alert("Enter Valid Mobile Number");
    }
  };

  const handleAnswer = (selectedOption, questionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] == question.correctOption) {
        console.log(question.correctOption);
        score++;
      } else {
        score -= 1 / 5;
      }
    });
    return parseFloat(score.toFixed(2));
  };
  console.log(userAnswers);
  const filterData = (e) => {
    const filteredObjects = questions.filter((obj) => obj.paper == e);
    setFilter(filteredObjects);
  };

  const seeYourSocre = async () => {
    if (typeof window !== "undefined") {
      var stu = localStorage.getItem("studentData");
      var student = JSON.parse(stu);

      setStudentData(JSON.parse(stu));
    }
    var finalsocre = calculateScore();

    try {
      const body = {
        name: student.name,
        email: student.email,
        phonenumber: student.phonenumber,
        subject: student.subject,
        city: student.city,
        score: finalsocre,
      };
      console.log(body);
      const response = await fetch("/api/quiz/user-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        console.log("Data submitted successfully.");
        setQuizCompleted(true);
      } else {
        console.error("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        text: `Hey! I just cleared a quiz by Adhyayanam Academy. See my results and check it out for yourself! ${
          studentData.name
        } Score ${calculateScore()} Try the quiz:  https://adhyayanamacademy.com/Quiz `,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const renderQuestions = () => {
    return (
      <div
        className={`grid  ${
          questionCount > filter.length - 1
            ? "sm:grid-cols-1"
            : "sm:grid-cols-3"
        } grid-cols-1`}
      >
        {questionCount > filter.length - 1 ? (
          <div className="w-[500px] sm:col-span-2 sm:px-10 mt-[10px] sm:mt-1 justify-center text-center">
            <button
              className="mt-4 bg-red text-white px-4 py-2 rounded "
              onClick={seeYourSocre}
            >
              See Your Score
            </button>
          </div>
        ) : (
          <>
            <div className="sm:col-span-2 sm:px-10 mt-[10px] sm:mt-1">
              <p>{filter[questionCount]?.description}</p>
              <div className="flex">
                <span className="pr-1 text-sm sm:my-auto">
                  Q.{questionCount + 1}.
                </span>
                <div>
                  {" "}
                  <img
                    src={filter[questionCount]?.image}
                    className="md:w-[500px] object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4  mx-8 md:mx-12">
                {["a", "b", "c", "d"].map((option, optionIndex) => (
                  <div key={option} className="mb-2">
                    <label className="text-sm">
                      <input
                        type="radio"
                        name={`question-${questionCount}`}
                        value={optionIndex}
                        checked={userAnswers[questionCount] == optionIndex}
                        onChange={() =>
                          handleAnswer(optionIndex, questionCount)
                        }
                      />{" "}
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <div class="flex justify-between mt-5">
                <button
                  class="flex items-center py-1 px-2 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-blue hover:bg-[#4287f5] hover:text-white"
                  onClick={() => setQuestionCount(questionCount - 1)}
                  disabled={questionCount == 0}
                >
                  ⪻ Previous
                </button>
                <button
                  class="flex items-center py-1 px-2 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-blue hover:bg-[#4287f5] hover:text-white"
                  onClick={() => setQuestionCount(questionCount + 1)}
                  //disabled={questionCount == filter.length - 1}
                >
                  Next ⪼
                </button>
              </div>
            </div>
            <div className=" order-first sm:order-2 h-90 ">
              <p className="text-blackl text-center font-semibold mt-2  bg-[#bed4eb] py-2">
                Time Left
              </p>
              <Countdown duration={filter.length} seeYourSocre={seeYourSocre} />
              <h3 className="text-center mt-2 font-semibold  bg-[#bed4eb] py-2">
                Quant
              </h3>
              <div className="grid grid-cols-5 justify-center text-center mt-3  gap-2">
                {userAnswers.slice(0, filter.length).map((ans, index) => (
                  <>
                    <div
                      className={`"px-2 py-2  ${
                        ans != null ? "bg-[#076316]" : "bg-[#a8afb5]"
                      }  rounded-tl-lg  text-white "`}
                      style={
                        questionCount == index
                          ? { backgroundColor: "#366cc2" }
                          : {}
                      }
                    >
                      {index + 1}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      {/* <CertificateComponent /> */}

      <div className="flex justify-center items-center">
        <div className="bg-white p-2 sm:p-8 rounded ">
          {quizStarted ? (
            quizCompleted ? (
              <div className="bg-red p-14  sm:p-20 rounded-md text-white">
                <h1 className="text-xl w-100 font-bold mb-1">
                  Congratulation {studentData.name}!
                </h1>
                <h1 className="text-2xl w-100 font-bold mb-1">
                  Quiz Completed
                </h1>
                <p>
                  Your Score: {calculateScore()} / {questions.length}
                </p>
                <div
                  className=" h-10 w-[95px] p-2  font-bold  ml-10 "
                  onClick={() => handleShare()}
                >
                  {/* <RWebShare
                    data={{
                      // text: "Like humans, flamingos make friends for life",
                      // url: ` ${" "}  Hey! I just cleared a quiz by Adhyayanam Academy. See my results and check it out for yourself!${
                      //   studentData.name
                      // } Score ${calculateScore()} Try the quiz:https://adhyayanamacademy.com/Quiz`,

                      // title: "Flamingos",
                      text: "Web Share - GfG",
                      url: "http://localhost:3000",
                      title: "GfG",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  > */}
                  <div
                    className="bg-white  px-5 rounded-full mt-2 "
                    role="button"
                  >
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios/50/forward-arrow.png"
                      alt="forward-arrow"
                    />
                  </div>
                  {/* </RWebShare> */}
                </div>
              </div>
            ) : (
              <div>
                {!filter ? (
                  <div className=" grid grid-cols-2 sm:grid-cols-4 gap-6 text-center justify-center">
                    {paper?.map((p) => (
                      <div
                        key={p}
                        className="cursor-pointer  shadow-xl border border-[#dadada] hover:bg-red hover:text-white transition duration-300 ease-in-out hover:scale-110 py-3 px-6"
                        onClick={() => filterData(p)}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {renderQuestions()}

                    {/* <button
                      className="mt-4 bg-red text-white px-4 py-2 rounded "
                      onClick={() => setQuizCompleted(true)}
                    >
                      See Your Score
                    </button> */}
                  </>
                )}
              </div>
            )
          ) : (
            <div className="w-full">
              <div className="bg-white p-8 rounded  ">
                <h1 className="text-2xl font-bold mb-6">
                  Quiz Registration Form
                </h1>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block font-medium text-gray-700"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-medium text-gray-700"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required={true}
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phonenumber"
                      className="block font-medium text-gray-700"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      id="phonenumber"
                      name="phonenumber"
                      value={formData.phonenumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block font-medium text-gray-700"
                    >
                      School:
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block font-medium text-gray-700"
                    >
                      City:
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>
                  <span
                    onClick={handleSubmit}
                    className="cursor-pointer bg-red text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Submit
                  </span>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
