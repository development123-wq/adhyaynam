import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = ({ show }) => {
  return (
    <>
      <section id="about" className="py-5" style={{ maxWidth: "auto" }}>
        <div className=" bg-dark">
          <div className="text-white  container text-center items-center  py-5 sm:py-16">
            <h2 className=" text-3xl font-bold p-4">
              Redefining Learning Every Step of The Way
            </h2>
            <p className=" text-lg font-light pb-2 text-justify font-montserrat ">
              Adhyayanam Academy, over the years since its inception, has grown
              familiar with the importance of strong foundation and
              comprehensive preparation when it comes to cracking competitive
              entrance exams. Therefore, we believe in moulding true
              professionals by providing the highest quality of education.
            </p>
            <p className=" text-lg font-light pb-2 text-justify font-montserrat">
              Accompanied by a team of elite educators with several decades
              worth of rich experience in the education industry, we believe in
              imparting knowledge by inventing the most efficient, constructive,
              and effective course material to unlock the potential of every
              student. In combination with our faculty, it is a guaranteed way
              of building the road to success.
            </p>
            <p className=" text-lg font-light pb-2 text-justify font-montserrat">
              Offering versatile courses for entrance exams like{" "}
              <Link href="/ca-coaching-in-dwarka"> CA,</Link>{" "}
              <Link href="/cs-coaching-in-dwarka"> CS,</Link>{" "}
              <Link href="/common-university-entrance-test-in-dwarka">
                {" "}
                CUET,{" "}
              </Link>
              among others, Adhyayanam Academy aims to nurture the young minds
              of India.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
