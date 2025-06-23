"use client";
// import { Courses } from "@/components/Common/courseData";
import AccordionItem from "@/components/faq/FaqCourses";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Quiz from "@/components/Quiz/Quiz";
import parse from "html-react-parser";
// export const generateMetadata = ({ params }) => {
//   const [slug] = params.slug;
//   const data = Courses.find((item) => item.parms == slug);
//   const pageTitle = data?.meta.Title;
//   const description = data?.meta.Description;
//   const canonicalUrl = data?.meta.url;
//   const ogImageUrl = "/Logo.png";

//   return {
//     title: pageTitle,
//     meta: [
//       { name: "description", content: description },
//       { name: "author", content: "adhyayanamacademy" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },
//       { name: "robots", content: "index, follow" }, // Control search engine indexing
//       { name: "canonical", content: canonicalUrl }, // Canonical URL
//       { property: "og:title", content: pageTitle }, // Open Graph title
//       { property: "og:description", content: description }, // Open Graph description
//       { property: "og:image", content: ogImageUrl }, // Open Graph image
//       { name: "twitter:card", content: "summary_large_image" }, // Twitter card type
//       { name: "twitter:title", content: pageTitle }, // Twitter title
//       { name: "twitter:description", content: description }, // Twitter description
//       { name: "twitter:image", content: ogImageUrl }, // Twitter image
//     ],
//   };
// };

const Programs = ({ params }) => {
  const [slug] = params.slug;
  const Courses = [
    {
      mainName: "",
      mainName2:
        "<p><b><i>&ldquo;The Adhyayanam Academy 2 Year Course for Class XIth&rdquo;</i></b></p>",
      Description2:
        "<p>One of the best courses for Class XIth and XIIth students looking for coaching classes in Dwarka, Neev is a course made by the experts at Adhyayanam Academy. The two year program aims to build a robust foundation for students to ace the XIth and XIIth board exams, making it one of the best courses for XIIth board exam preparation in Dwarka. Prepare while learning from the best educators at Adhyayanam Academy with a course tailor-made for class XIth and XIIth exams.</p>",
      CourseName: "NEEV",
      parms: "neev-for-xi-students-in-dwarka",
      desc: {
        heading: "2 YEAR CLASSROOM PROGRAM - PREFECT BATCH",
        sbheading: "FOR STUDENTS GOING TO CLASS XI th",
        svg: "/svg/neev.svg",
        points: [
          "Academic Content at Advanced Level",
          "Complementary Doubt session for other subjects",
          "Developing High Order Thinking Skills",
          "Magic Book",
          " Previous Years Questions Papers",
          " Reference Manual",
        ],
      },
      meta: {
        Title: "NEEV | 2 Year Classroom Program for XIth & XIIth in Dwarka",
        Description:
          "Neev is a unique course providing the best coaching classes for class XIth and XIIth students in Dwarka. Learn at the most trusted coaching institute for class XIth and XIIth.",
        url: "https://adhyayanamacademy.com/neev-for-xi-students-in-dwarka",
      },
      Description:
        "A two-year integrated course designed to construct a robust foundation for any student, Neev is the go-to programme in our institute. Neev stands for foundation in Hindi, which is the first goal for anyone wanting to go beyond the stars.",
    },
    {
      mainName: "",
      mainName2: `<p><b><i>&ldquo;An Integrated 1 Year Programme for Class XIIth Students&rdquo;</i></b></p>`,
      Description2:
        "<p>A programme meant for Class 12th students made by the best educators at Adhyayanam Academy, Imarat is the best option for students looking to join the best XIIth board exam coaching classes in Dwarka, Delhi. The top coaching institute in Dwarka, Delhi, Adhyayanam Academy offers this specialized course for students looking to ace their XIIth board exams. Learn from the best teachers found in coaching institutes of Dwarka, Delhi, at Adhyayanam Academy.</p>",
      CourseName: "Imarat",
      desc: {
        heading: "1 YEAR INTEGRATED PROGRAM",
        sbheading: " FOR STUDENTS IN CLASS XII th",
        svg: "/svg/imrat.svg",
        points: [
          "Complementary Doubt session for other subjects",
          "Developing High Order Thinking Skills",
          "Magic Book",
          "Previous Years Questions Papers",
          "Reference Manual",
        ],
      },
      parms: "imarat-for-xi-students-in-dwarka",
      meta: {
        Title: " IMARAT | 1 Year Integrated Program for XIth in Dwarka ",
        Description:
          "Prepare for CBSE board exams at the best coaching institute for board exam preparation in Dwarka. Join the best coaching classes for XIIth.",
        url: "https://adhyayanamacademy.com/imarat-for-xi-students-in-dwarka",
      },
      Description:
        "A one-year course meant for those in Class 12th, Imarat helps a student conquer the final challenge of their schooling years while also providing a gateway to the next level, into a wider world. Our course not only allows a student to stand at the top of their grade, but also prepare for the big exams awaiting them after it (JEE, NEET, CUET), securing their future.",
    },
    {
      mainName: "",
      mainName2: "<p><b><i>&ldquo;The Ever-Expanding Course&rdquo;</i></b></p>",
      Description2:
        "<p>Anant is the sole course of Adhyayanam Academy that has no limits. The best option for students looking to join a trusted coaching institute after Class 12th, Anant helps one to develop an applicable framework for exams of the gateway level, and beyond.</p>",
      CourseName: "Anant",
      parms: "anant-for-xii-students-in-dwarka",
      desc: {
        heading: "FOR STUDENTS AFTER CLASS XII th",
      },
      meta: {
        Title: "ANANT | 1 Year Courses after XIIth in Dwarka",
        Description:
          "Join the best coaching classes after XIIth in Dwarka. Adhyayanam Academy is the top coaching institute for students after XIIth.",
      },
      Description:
        "Anant refers to the infinite, the vast expanse beyond the stars, the final destination of human ambition. Yet, it all has to begin on a tiny blue planet in the middle of nowhere, in a small city of no cosmic significance. So then, how do we make a difference? By treading on old paths and forging new ones, Anant aims to be a flexible, ever-expanding course that is customizable for being tailored to each student’s needs. With the capability of unlocking a person's true potential, Anant is a course that is decided by you, bringing your destiny much closer.",
    },
    {
      mainName: "Xth Boad Exam Preparation Coaching in Dwarka Delhi",
      CourseName: "IXth & Xth Classes",
      Description2: `<p>Join the top coaching institute in Dwarka and Delhi for IXth and Xth. Utilize previous years&rsquo; question papers to facilitate ease of preparation of the CBSE board exams at the best coaching institute for board exam preparation in Dwarka. The teachers at our institute use updated teaching methods in accordance with the latest NCERT syllabus. We offer a blend of online and offline learning, where students can take part in classes and even tests from the comforts of home. Be a part of the classroom learning journey at Adhyayanam Academy, the most trusted coaching institute for Xth board exam preparation in Dwarka, Delhi.</p>`,
      mainName2: `<p><b><i>&ldquo;The Most Trusted Institute for Xth Board Exam Preparation&rdquo;</i></b></p>`,
      parms: "coaching-for-ix-and-x",
      meta: {
        Title:
          "Best Coaching for Xth Boards in Dwarka | IX & X Classes in Dwarka",
        Description:
          "Prepare for exams at the best coaching institute for Xth CBSE board exam preparation in Dwarka, Delhi. Top coaching classes for IXth and Xth",
        Keywords:
          "best coaching for xth, coaching for cbse board exam preparation, best classes for ix and x in dwarka, top coaching in dwarka for X board Exam preparation",
        url: "https://adhyayanamacademy.com/coaching-for-ix-and-x",
      },
      Description:
        "Adhyayanam Academy offers a foundational programme for students in Class IXth and Xth, helping them become class toppers. Students in Class IXth and Xth can join this programme to build a strong foundation for when they eventually have to select a stream in Class XIth. Offering a robust learning programme to simultaneously alleviate stress and facilitate streamlined learning for young minds, the programmes for IXth and Xth classes are led by expert teachers who have years of experience helping students tackle exams with ease.",
    },
    {
      mainName: "Commerce Classes for XI & XII in Dwarka Delhi",
      mainName2: `<p><b><i>&ldquo;The Leading CS Coaching Institute in Dwarka, Delhi&rdquo;</i></b></p>`,
      Description2: `<p>Learn at the best commerce coaching institute in Dwarka, Delhi. Offering the most tried and tested methods to scoring the highest marks possible in the commerce stream, Adhyayanam Academy is the top commerce coaching institute for XIth and XIIth exams in Dwarka, Delhi. Providing a variety of study materials ranging from previous years&rsquo; question papers and mock tests to worksheets and assignments, Adhyayanam Academy thoroughly prepares their students for exams. Furthermore, revision classes and doubt-clearing sessions are frequently held for concerned students. Join the best commerce coaching classes in Dwarka, Delhi now.</p>`,
      CourseName: "XIth & XIIth Commerce",
      parms: "commerce-coaching-in-dwarka",
      crashCourse: `<p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><strong><span style="font-size:29px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;XI and XII Commerce Crash Course &nbsp;&nbsp;</span></strong></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><strong><em><span style="font-size:24px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong style="font-weight: 700; color: rgb(0, 0, 0); font-family: Calibri, sans-serif; font-size: 14.6667px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><em><span style="font-size: 24px;">Become A Commerce Topper In 30 Days</span></em></strong></span></em></strong></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><strong><span style="font-size:24px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Adhyayanam Academy XI and XII Commerce Crash Course</span></strong></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;'><span style='font-size:21px;font-family:"Calibri",sans-serif;'>Designed for Class XI and XII students looking to strengthen their understanding of Commerce subjects as well as gain exposure to the various types of questions asked in the Board Exam without needing to deviate from their own preparation, the Adhyayanam Academy Crash Course for <span style="color: rgb(0, 0, 0); font-family: Calibri, sans-serif; font-size: 21px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">XI and XII</span> Commerce enables students to prepare for their exams in the shortest possible time. The course is of over 90 hours in length and covers all the topics of Commerce while assessing the students with Periodic Assignments and Tests, Mock Tests, Analysis of Previous Years&rsquo; Question Papers, Topic-wise Assignments<strong><span style='font-family:"Calibri",sans-serif;'>&nbsp;</span></strong>and Study Material. The sessions cover all the important topics as well as several strategies for the exam. Students can resolve their queries during the class or discuss their doubts later with the respective faculty members.</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;'><span style='font-size:21px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;'><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#333333;background:white;'>Adhyayanam Academy Crash Course for 12<sup>th</sup> Commerce is the perfect course for Commerce students who want to become a class topper. This course has been designed by the experts at Adhyayanam Academy to provide a complete understanding of the subjects of Commerce in a short period of time. With the help of veteran teachers and an excellent faculty, students can learn important concepts and principles of accountancy, business studies, and commerce in general that are essential to academic success. The course leaves no stone unturned, covering all important topics relevant to the latest exam patterns. Adhyayanam Academy Crash Course for Class 12<sup>th</sup> Commerce for Commerce Exam provides a strong foundation for students who wish to pursue a career in finance or accounting.</span><span style="font-size:21px;color:#333333;background:white;">&nbsp;</span><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#333333;background:white;'>It is an ideal choice for students who want to prepare for their board exams or entrance exams.&nbsp;</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;'><span style='font-size:21px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;background:white;'><strong><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>Course Pedagogy:</span></strong></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;background:white;'><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>&nbsp;</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;background:white;'><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>The Adhyayanam Academy Class <span style="color: rgb(0, 0, 0); font-family: Calibri, sans-serif; font-size: 21px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">XI and XII</span> Commerce Crash Course follows an innovative pedagogy involving a flexible, but consistent schedule, wherein all the basic concepts are covered along with relevant examples and practice questions.</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;background:white;'><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>&nbsp;</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;background:white;'><strong><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>Pre-session:&nbsp;</span></strong><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>Students solve questions from each topic and keep their queries ready beforehand.</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:7.5pt;font-size:11.0pt;background:white;'><strong><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>In-session:&nbsp;</span></strong><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>Students listen to the faculty carefully and practice all questions discussed along with the faculty itself. They also get all doubts cleared at this time.</span></p>
      <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;border:none;border-bottom:solid windowtext 1.5pt;padding:0cm 0cm 1.0pt 0cm;background:white;'>
          <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Times New Roman",serif;margin-top:0cm;margin-bottom:7.5pt;background:white;border:none;padding:0cm;'><strong><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>Post-session:&nbsp;</span></strong><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>Students go through questions from the previous years&rsquo; papers. They also raise queries and clear any doubt from the respective faculty.</span></p>
          <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Times New Roman",serif;margin-top:0cm;margin-bottom:7.5pt;background:white;border:none;padding:0cm;'><span style='font-size:21px;font-family:"Calibri",sans-serif;color:#222222;'>&nbsp;</span></p>
      </div>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><span style="font-size:21px;color:#333333;"><br>&nbsp;<br>&nbsp;</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><strong><span style="font-size:29px;color:#333333;background:white;">&nbsp;</span></strong></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><strong><span style="font-size:29px;color:#333333;background:white;">&nbsp;Exam Tips</span></strong></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><strong><span style="font-size:29px;color:#333333;background:white;">&nbsp;</span></strong></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><span style="font-size:21px;color:#333333;background:white;">Here are some tips on how to prepare for your Commerce exams:</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><span style="font-size:21px;color:#333333;background:white;">&nbsp;</span></p>
      <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>
          <p><strong><span style="font-family:Calibri;font-size:16.0pt;line-height:107%;color:#333333;background:white;">1.Know The Syllabus:</span></strong><span style="font-family:Calibri;font-size:16.0pt;line-height:107%;color:#333333;background:white;">&nbsp;Being familiar with the syllabus is the first step in preparing for any subject, exam, or course. The Adhyayanam Academy Class 11<sup>th</sup> and Class 12<sup>th</sup> Commerce Crash Course covers all the topics mentioned in the Class 11<sup>th</sup> and Class 12<sup>th</sup> Commerce syllabus. Gaining a thorough understanding of the syllabus would enable a student to overcome their exam anxiety, to a certain extent.</span></p>
      </div>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><span style="font-size:21px;color:#333333;background:white;">&nbsp;</span></p>
      <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>
          <p><strong><span style="font-family:Calibri;font-size:16.0pt;line-height:107%;color:#333333;background:white;">2.Practicing Previous Years&rsquo; Papers:</span></strong><span style="color:#333333;font-size:16.0pt;background:white;">&nbsp;The most common advice given while preparing for any exam is to practice with old question papers. For good reason, too. It is a great way to understand the exam pattern and its trends, along with the type of questions that may or may not be asked. The Adhyayanam Academy <span style="color: rgb(0, 0, 0); font-family: Calibri, sans-serif; font-size: 21px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">XI and XII</span> Commerce Crash Course offers the previous years&rsquo; papers for students to practice with.</span></p>
      </div>
      <p style='margin-right:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:0cm;font-size:11.0pt;'><strong><span style="font-size:21px;color:#333333;background:white;">&nbsp;</span></strong></p>
      <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>
          <p><strong><span style="font-family:Calibri;font-size:16.0pt;line-height:107%;color:#333333;background:white;">3.Taking Timed Mock Tests:</span></strong><span style="font-size:16.0pt;line-height:107%;background:white;">&nbsp;Taking mock tests for a student is essential to assess preparation level. However, mock tests truly shine in value when they are timed to simulate a real exam environment. The Adhyayanam Academy <span style="color: rgb(0, 0, 0); font-family: Calibri, sans-serif; font-size: 21px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">XI and XII</span> Commerce Crash Course offers mock tests designed to imitate an actual exam. This will help you to identify your strengths and weaknesses and work on them accordingly.</span></p>
      </div>
      <p style='margin-right:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:0cm;font-size:11.0pt;'><strong><span style="font-size:21px;color:#333333;background:white;">&nbsp;</span></strong></p>
      <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>
          <p><strong><span style="font-family:Calibri;font-size:16.0pt;line-height:107%;color:#333333;background:white;">4.Regular Revision</span></strong><span style="font-size:16.0pt;line-height:107%;background:white;">: Revision is the key to success in any exam. Every student must revise all the topics covered in the Adhyayanam Academy Class <span style="color: rgb(0, 0, 0); font-family: Calibri, sans-serif; font-size: 21px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">XI and XII</span> Commerce Crash Course regularly to ensure they are well-prepared. This will help students to retain information for a longer period.&nbsp;</span></p>
      </div>
      <p style='margin-right:0cm;margin-left:36.0pt;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:0cm;font-size:11.0pt;'><strong><span style="font-size:21px;color:#333333;background:white;">&nbsp;</span></strong></p>
      <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>
          <p><strong><span style="font-family:Calibri;font-size:16.0pt;line-height:107%;color:#333333;background:white;">5.Seek Help When In Doubt:</span></strong><span style="font-size:16.0pt;line-height:107%;background:white;">&nbsp;One of the greatest benefits of a coaching institute is its capacity to answer a student&rsquo;s queries with ease. If a student has any doubt or questions they don&rsquo;t understand, they can freely seek help from instructors or classmates. The Adhyayanam Academy Class <span style="color: rgb(0, 0, 0); font-family: Calibri, sans-serif; font-size: 21px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">XI and XII</span> Commerce Crash Course also offers a doubt-solving platform where students can get their queries resolved. In conclusion, preparing for an exam in Class 12 Commerce requires dedication and hard work. With the comprehensive Adhyayanam Academy Class <span style="color: rgb(0, 0, 0); font-family: Calibri, sans-serif; font-size: 21px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">XI and XII</span> Crash Course and the above-mentioned tips, students can ace the board exams with ease.</span><span style="color:#333333;font-size:21px;"><br>&nbsp;<br>&nbsp;</span></p>
      </div>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><strong><span style="font-size:24px;color:#333333;background:white;">Best Crash Course Coaching of Commerce Class 12</span></strong></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><span style="font-size:21px;color:#333333;background:white;">&nbsp;</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><span style="font-size:21px;color:#333333;background:white;">Looking for the best crash course Commerce coaching in Class 12? Search no more. Be a part of Adhyayanam Academy, the top online education platform of Delhi and Dwarka. Adhyayanam Academy provides the best solution through accessible, affordable education. Students looking to learn important concepts, subjects, and principles of commerce in a limited time frame may join this course. Delivering crash course education in a stress-free manner, Adhyayanam Academy enables students with the ability to reach the top of their class.</span></p>
      <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>`,
      meta: {
        Title:
          "XIth & XIIth Commerce Classes in Dwarka, Delhi | XIth & XIIth Classes ",
        Description:
          " Looking for the best commerce classes in Dwarka, Delhi. Adhyayanam Academy is offery best commerce coaching in Dwarka for Xi and Xiith. Top commerce classes for XI & XII.",
        Keywords:
          "commerce classes in dwarka, commerce coaching for xi and xii, best commerce institute in dwarka. Commerce in delhi for 12th",
        url: "https://adhyayanamacademy.com/commerce-coaching-in-dwarka",
      },
      Description:
        "Adhyayanam Academy offers a specialized course for students of commerce in Class XIth and Class XIIth, helping them build a dynamic skillset for the future. From Maths to Business Studies and Accounting, this Adhyayanam Academy programme covers all subjects of the commerce stream. Helping them prepare for their school exams while building a foundation for the entrances exams of the next level, here, at Adhyayanam Academy, we take it a step further and offer crash courses to students who have very little time for preparations. Providing education and excellence in one package, this course helps young learners to master the necessary fundamental skills for the future.",
    },
    {
      mainName: "CUET Exam Preparation Coaching in Dwarka Delhi",
      CourseName: "Common University Entrance Test (CUET)",
      parms: "common-university-entrance-test-in-dwarka",
      mainName2: `<p><b><i>&ldquo;The Best CUET Coaching Institute in Dwarka, Delhi&rdquo;</i></b></p>`,
      Description2: `<p> Are you looking for the best CUET coaching in Dwarka for yourself? Look no further than Adhyayanam Academy, the top CUET coaching institute in Dwarka, and Delhi as a whole. Learn from the veteran educators at the most trusted coaching institute for CUET exam preparation in Dwarka. Be a part of the best CUET coaching institute in east Delhi. Adhyayanam Academy offers previous years&rsquo; question papers, worksheets, mock tests, and more both online and offline. Applying updated teaching materials ahead of the curve with regards to the education industry, Adhyayanam Academy aims to make the highest quality of learning accessible to all.</p>`,
      Description:
        "An integrated course offered by Adhyayanam Academy to help students overcome one of the biggest entrance exams in India, the Adhyayanam CUET Course is a dynamic course constantly changing to meet the latest exam pattern and trends of the CUET entrance exam. Offering the most advanced and versatile programme for passing CUET with flying colours, the Common University Entrance Test (CUET) standard and crash courses of Adhyayanam Academy are constantly updated to keep up with the latest CUET trends and patterns while being improvised by the best educators in the industry. Providing both a full-length course and a crash course to cater different student needs, this is one of the most popular programmes to choose in Adhyayanam Academy.",
      CourseDetails: {
        sections: [
          {
            section: "Section 1A",
            subject: "Languages",
            details:
              "Questions to be Attempted\n40 questions to be attempted out of 50 in each language.",
            syllabus:
              "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/LanguageSyllabus(IAandIB).pdf",
          },
          {
            section: "Section 1B",
            subject: "Languages",
            details:
              "There are 13 different languages. Any of these languages may be chosen.",
            syllabus:
              "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/LanguageSyllabus(IAandIB).pdf",
          },
          {
            section: "Section 2",
            subject: "Domain",
            details:
              "There are 20 Languages. Any of these languages may be chosen.\nThere are 27 Domains specific subjects being offered under this section. A candidate may choose any subject as desired by the applicable University/ Universities.",
            syllabus: "https://cuet.samarth.ac.in/index.php/site/syllabus",
          },
          {
            section: "Section 3",
            subject: "General Test",
            details:
              "For any such undergraduate programme / programmes being offered by Universities where a General Test is being used for admission.",
            syllabus:
              "https://cdnasb.samarth.ac.in/site-admin23/syllabus/501_General_Test.pdf",
          },
        ],
        notes: [
          "From the above subjects / languages, the candidate can choose a maximum of 10 subjects from all three Sections.",
          "Examination will be conducted on multiple days in three shifts, depending on the number of Candidates and Subject choices.",
          "Objective type Multiple Choice Questions (MCQs).",
        ],
      },
      central_universities: [
        "Aligarh Muslim University",
        "Assam University",
        "Babasaheb Bhimrao Ambedkar University",
        "Banaras Hindu University",
        "Central University of Andhra Pradesh",
        "Central University of South Bihar",
        "Central University of Gujarat",
        "Central University of Haryana",
        "Central University of Himachal Pradesh",
        "Central University of Jammu",
        "Central University of Jharkhand",
        "Central University of Karnataka",
        "Central University of Kashmir",
        "Central University of Kerala",
        "Central University of Odisha",
        "Central University of Punjab",
        "Central University of Rajasthan",
        "Central University of Tamil Nadu",
        "Dr. Harisingh Gaur Vishwa Vidyalaya",
        "Guru Ghasidas Vishwavidyalaya",
        "Hemvati Nandan Bahuguna Garhwal University",
        "Indira Gandhi National Tribal University",
        "Jamia Millia Islamia",
        "Jawaharlal Nehru University",
        "Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya",
        "Manipur University",
        "Maulana Azad National Urdu University",
        "Mizoram University",
        "Nagaland University",
        "North Eastern Hill University",
        "Pondicherry University",
        "Rajiv Gandhi University",
        "Sikkim University",
        "Tezpur University",
        "The English and Foreign Languages University",
        "Tripura University",
        "University of Allahabad",
        "University of Delhi",
        "University of Hyderabad",
        "Visva Bharati University",
        "Mahatma Gandhi Central University",
        "Central Sanskrit University, Delhi",
        "Shri Lal Bahadur Shastri National Sanskrit University",
        "National Sanskrit University",
      ],
      meta: {
        Title: "Best CUET Coaching In Dwarka and Delhi | Adhyayanam Academy ",
        Description:
          " Looking for the best CUET coaching institute in Dwarka, Delhi? Adhyayanam Academy is the top CUET coaching in Dwarka. we are offering best CUET classes in Dwarka.",
        url: "https://adhyayanamacademy.com/common-university-entrance-test-in-dwarka",
      },
    },
    {
      mainName: "CA Exam Preparation Coaching in Dwarka Delhi",
      CourseName: "Chartered Accountancy (CA)",
      parms: "ca-coaching-in-dwarka",
      Description2: `<p>Providing the best CA coaching in Dwarka, Adhyayanam Academy is the top coaching institute for CA in Dwarka, Delhi. One of the leading experts in CA coaching in Dwarka, Adhyayanam Academy strives to bring the latest trends and patterns of the CA exam in its mock tests and classes. Taught by trusted educators with decades of experience, Adhyayanam Academy has some of the most advanced teaching methods. With a blend of both online and offline learning provided in a hybrid mode, students can now learn anywhere from Adhyayanam Academy through its own app. Providing affordable, accessible courses, Adhyayanam Academy is the best choice for CA aspirants.</p>`,
      mainName2:
        "<p><b><i>&ldquo;The Most Trusted CA Coaching Institute in Dwarka, Delhi&rdquo;</i></b></p>",
      Description:
        "The profession of Chartered Accountancy is one where an individual known as a chartered accountant budgets, taxes, and audits for clients. They provide financial advice on business strategies and help a company manage its monetary success. The Institute of Chartered Accounts of India (ICAI) supervises CA education and training. It is only upon registering with the ICAI does someone be recognized as a Chartered Accountant. Adhyayanam Academy offers certified courses on CA, including a standard course and a crash course. Adhyayanam Academy offers accessible and affordable Chartered Accountancy (CA) coaching programmes for CA Foundation, CA Intermediate, and CA Final. Study in a hybrid style from the industry’s best veterans with the most up-to-date, highly effective teaching pedagogy following the latest CA exam trends.",
      Exams: [
        {
          title: "CA Foundation Coaching in Dwarka Delhi",
          title2: "Top CA Foundation Coaching Institute in Dwarka, Delhi",
          parms: "CA-Foundation",
          Overview: {
            Exam_Name: "Chartered Accountants Foundation (CA Foundation)",
            Scope: "National Level",
            Conducting_Body:
              "The Institute of Chartered Accountants of India (ICAI)",
            Exam_Mode: "Offline mode",
            Exam_Level: "Entry level national examination",
            Exam_Type: "Objective and Subjective",
            Medium_Exam:
              "English / Hindi (English compulsory for Section B of Paper 2)",
          },
          Preparation:
            "CA Foundation is the entry-level exam for pursuing the Chartered Accountancy course. Students older than 17 years of age can register for a Chartered Accountancy course. After registration, they have to undergo training in preparation for the CA Foundation Exam.",
          meta: {
            Title: "CA Foundation Exam Preparation Coaching in Dwarka, Delhi",
            Description:
              "Looking For CA Foundation coaching in Dwarka? Adhyayanam Academy provides best CA Foundation Classes in Dwarka. Top CA Foundation Coaching Institute in Delhi",
            keywords:
              "CA foundation Coaching, best ca foundation in Dwarka, ca foundation classes in Dwarka, top ca foundation coaching in delhi, best ca foundation coaching institute in Dwarka, best ca foundation coaching institute, coaching for ca exam preparation.",
            url: "https://adhyayanamacademy.com/ca-foundation-coaching-in-dwarka",
          },
        },
        {
          title: "CA Intermediate Coaching in Dwarka Delhi",
          parms: "CA-Intermediate",
          Overview: {
            Exam_Name:
              "Chartered Accountants (CA) Intermediate; formerly known as CA IPCC",
            Exam_Level: "National",
            Conducting_Body:
              "The Institute of Chartered Accountants of India (ICAI)",
            Exam_Mode: "Offline",
            Exam_Type: "Objective and Subjective",
            Exam_Duration: "Three hours per paper",
            Medium_Exam: "English/ Hindi",
          },
          Preparation:
            "CA Intermediate is the second test after CA Foundation. After clearing CA Foundation, one has to enroll for CA Intermediate. Once the registration for the course has been completed, a candidate has to undergo training in preparation for the CA Intermediate Exam.",
          meta: {
            Title: "CA Intermediate Exam Preparation Coaching in Dwarka, Delhi",
            Description:
              "Looking For CA Intermediate coaching in Dwarka? Adhyayanam Academy provides best CA Intermediate Classes in Dwarka. Top CA Intermediate Coaching Institute in Delhi.",
            keywords:
              "CA Intermediate Coaching, best ca Intermediate in Dwarka, ca Intermediate classes in Dwarka, top ca Intermediate coaching in delhi, best ca Intermediate coaching institute in Dwarka, best ca Intermediate coaching institute, coaching for ca exam preparation.",
            url: "https://adhyayanamacademy.com/ca-intermediate-coaching-in-dwarka",
          },
        },
        {
          title: "Best Coaching for CA Final Exam Preparation in Dwarka",
          parms: "CA-Final",
          Overview: {
            Exam_Name: "Chartered Accountants (CA) Final",
            Conducting_Body:
              "The Institute of Chartered Accountants of India (ICAI)",
            Exam_Mode: "Offline",
            Exam_Type: "Objective and Subjective",
            Exam_Duration:
              "Three hours per paper (except Paper 6 of the revised scheme)",
            Medium_Exam: "English, Hindi",
          },
          Preparation:
            "CA Final is the last level exam in the Chartered Accountancy course. Students can enroll themselves for CA Final after clearing both groups of CA Intermediate. One can appear in the CA Final Exam while completing their last six months of Articleship training. You will become a Chartered Accountant once you clear both groups of CA Final and have completed your three years of Articleship Training.",
          meta: {
            Title: "CA Final Exam Preparation Coaching in Dwarka, Delhi",
            Description:
              "Looking for the best coaching in Dwarka for CA Final Exam? Adhyayanam Academy provides best Classes in Dwarka for CA Final Exam Preparation",
            keywords:
              "CA Coaching, best ca in Dwarka, ca classes in Dwarka, top ca coaching in delhi, best ca final exam preparation institute in Dwarka, best coaching institute for ca final exam, coaching for ca final exam preparation",
            url: "https://adhyayanamacademy.com/ca-foundation-coaching-in-dwarka",
          },
        },
      ],
      FAQs: [
        {
          Q: "What is the nomenclature for all the three levels under the existing Scheme of Education and Training?",
          A: "The three levels are called Foundation Course, Intermediate Course, and Final Course.",
        },
        {
          Q: "Want to know about fees for CA Courses.",
          A: "Fees for Foundation Course is Rs. 9200/- (including prospectus cost of Rs.200). Fees for Intermediate Course Rs. 18000/- for both groups. For a single group, Rs. 13000/-. Fees for Final Course Rs.22000/ for both groups. For other details, please read the ICAI prospectus [link provided].",
        },
        {
          Q: "What is the fee for Intermediate Course for Direct Entry students?",
          A: "Fee for Intermediate Course Both Groups is Rs.18,200/-.",
        },
        {
          Q: "What fee concession is applicable for students from Jammu & Kashmir, Ladakh, Andaman & Nicobar Islands, and North-East states?",
          A: "75% concession in the course registration fee is applicable for students from Jammu & Kashmir, Ladakh, Andaman & Nicobar Islands, and North-East states at all three levels, till March 31, 2025.",
        },
        {
          Q: "I am a Class XI student who passed class X recently. Am I eligible to register for the Foundation Course?",
          A: "Yes. Students after passing the Class 10th examination conducted by an examining body constituted by law in India or an examination recognized by the Central Government or the State Government as equivalent thereto may provisionally register in the Foundation Course of ICAI.",
        },
        {
          Q: "How to get regularization of registration who are registered as a provisional candidate for Foundation Course.",
          A: "You can upload your 12th standard mark sheet with Pass result through the Profile Edit option under Student Dashboard in SSP.",
        },
        {
          Q: "What is the cut-off date of registration for the Foundation Course?",
          A: "1st January/ 1st July is the cut-off date of registration for being eligible to appear in the ensuing May/ June and November/ December examinations respectively covering a study period of four months.",
        },
        {
          Q: "When does a student become eligible for appearing in Foundation Examination?",
          A: "A student becomes eligible for Foundation Examination after appearing in the Senior Secondary (10+2) Examination conducted by an examining body constituted by law in India or an examination recognized by the Central Government (or the State Government) as equivalent thereto, and completing 4 months of the study period, i.e. after 4 months from the date of registration in Foundation Course.",
        },
        {
          Q: "I have completed two years of diplomas in place of 12th. How can I get confirm registration for the foundation course?",
          A: "Students who have completed two years of higher education including a Diploma course after passing 10th class, conducted either by Central/State Government(s) and on passing such a course have either been admitted to the first year of graduation course or have passed the graduation course conducted by any University, including Open Universities, established by law in India shall be also eligible for admission to Foundation Course.",
        },
        {
          Q: "I have completed my 12th from the International board. How can I get confirm registration for the foundation course?",
          A: "Student has to submit 5 (five) passes at GCE ‘O’ level/GCSE/IGCSE in A/B/C Grades and two passes at GCE ‘Advanced’ level examination of the approved British Examining Bodies subject to submission of equivalence certificate issued by the Association of Indian Universities, AIU House, 16 Comrade Indrajit Gupta Marg (Kotla Marg, Opp. Bal Bhavan), New Delhi-110 002 certifying that the examination passed/appeared is equivalent to +2 stage qualification of an Indian Body.",
        },
        {
          Q: "How many papers are there in Foundation Course?",
          A: "There are 4 papers in Foundation Course.",
        },
        {
          Q: "What is the examination pattern in Foundation Course?",
          A: "Out of 4 papers, 2 papers are subjective type (Paper 1 & 2) and the rest of the 2 papers are objective type (Paper 3 & 4).",
        },
        {
          Q: "Is there a negative marking in Foundation Examination?",
          A: "Yes. A negative marking of 25% is for Papers 3 & 4 only and not for subjective papers, i.e., Papers 1 & 2.",
        },
        {
          Q: "What are the papers in Foundation Course?",
          A: "There are 4 papers in Foundation Course which are as under: Paper 1: Principles and Practice of Accounting (100 Marks) Paper 2: Business Laws & Business Correspondence and Reporting (100 Marks) Section A: Business Laws (60 Marks) Section B: Business Correspondence and Reporting (40 Marks) Paper 3: Business Mathematics and Logical Reasoning & Statistics (100 Marks) Part I: Business Mathematics and Logical Reasoning (60 Marks) Part II: Statistics (40 Marks) Paper 4: Business Economics & Business and Commercial Knowledge (100 Marks) Part I: Business Economics (60 Marks) Part II: Business and Commercial Knowledge (40 Marks)",
        },
        {
          Q: "How can I qualify Foundation Examination?",
          A: "You can qualify Foundation Examination by securing 50% in aggregate and 40% in each subject individually.",
        },
        {
          Q: "What is the validity period for CA-Foundation, Intermediate, and Final? Specify the procedure for re-validation.",
          A: "Validity period for CA Foundation, Intermediate, and Final is 3, 4, and 5 years respectively. After the initial validity period lapses, the student has to get his/her registration re-validated. Re-validation Procedure: The student needs to submit a duly filled format online for re-validation in the Students' Dashboard in the E-Services link on the homepage, register as an existing student and pay Rs. 300, 400, and 500 respectively for CA Foundation, Intermediate, and Final respectively. After the re-validation student can appear in the respective exam by specifying the date of revalidation in the exam form (online at: www.icaiexam.icai.org) in the first week of Feb and August for May and November attempts respectively.",
        },
        {
          Q: "When can I register for the Intermediate Course?",
          A: "A student can register in Intermediate Course after qualifying for the Foundation examination or through the Direct Entry Route after qualifying for graduation/ post-graduation with requisite marks. Students can also register for Intermediate Course through provisional registration under Direct Entry Scheme who are in the last year of their graduation.",
        },
        {
          Q: "If I qualify Foundation May examination, when will I be eligible to appear for Intermediate Examination?",
          A: "For appearing in the Intermediate Examination, a study period of eight months is required. Accordingly, you have to register latest by 1st September/ 1st March in Intermediate Course to be eligible to appear in the succeeding May/ November Intermediate Examination respectively.",
        },
        {
          Q: "I am through Foundation Route, when can I commence Practical Training?",
          A: "After passing either or both groups of Intermediate Examination and successfully completing with four Weeks of Integrated Course on Information Technology and Soft Skills (ICITSS), you can commence Practical Training.",
        },
        {
          Q: "What is the duration of Practical Training?",
          A: "Three years.",
        },
        {
          Q: "I have completed graduation/ post-graduation or am in the last year of graduation/ post-graduation and wish to join the CA Course through the Direct Entry Route. When can I join the course to be eligible for the May examinations?",
          A: "You must register for the Intermediate Course during the third year of graduation and complete the Four Weeks Integrated Course on Information Technology and Soft Skills (ICITSS) and commence the Practical Training latest by 1st August to be eligible to appear for the next May examination. Through Direct Entry Route, a student can appear in the Intermediate Examination after completing of 9 months of Practical Training. Under the Direct Entry Route, a student must commence the practical training latest by 1st August/ 1st February to be eligible to appear in the ensuing May/ November examinations respectively.",
        },
        {
          Q: "I have qualified Intermediate level examination of Institute of Company Secretaries of India or Institute of Cost Accountants of India, when can I commence Practical Training?",
          A: "After passing either or both groups of Intermediate Examination and successfully completing the Four Weeks Integrated Course on Information Technology and Soft Skills (ICITSS), you can commence Practical Training.",
        },
        {
          Q: "I have qualified Intermediate level examination of the Institute of Company Secretaries of India or the Institute of Cost Accountants of India, when can I be eligible for the Intermediate examination of Chartered Accountants?",
          A: "After completing eight months of the study period in the Intermediate Course, you become eligible for the Intermediate examination, i.e., after 8 months from the date of registration in the Intermediate Course. In other words, the journey of such a student is similar to the journey of the Foundation Route student except that such a student is exempted from the Foundation examination.",
        },
        {
          Q: "What are the papers in the Intermediate Course?",
          A: "There are 8 papers in Intermediate Course which are as under: Group I Paper 1: Accounting (100 Marks) Paper 2: Corporate and Other Laws (100 Marks) Part I: Company Law (60 Marks) Part II: Other Laws (40 Marks) Paper 3: Cost and Management Accounting (100 Marks) Paper 4: Taxation (100 Marks) Section A: Income-tax Law (60 Marks) Section B: Indirect Taxes (40 Marks) Group II Paper 5: Advanced Accounting (100 Marks) Paper 6: Auditing and Assurance (100 Marks) Paper 7: Enterprise Information Systems and Strategic Management (100 Marks) Section A: Enterprise Information Systems (50 Marks) Section B: Strategic Management (50 Marks) Paper 8: Financial Management and Economics for Finance (100 Marks) Section A: Financial Management (60 Marks) Section B: Economics for Finance (40 Marks)",
        },
        {
          Q: "When can I register for the Final Course?",
          A: "One can register for the Final Course any time after passing both groups of Intermediate Examination.",
        },
        {
          Q: "What are the papers at the Final level?",
          A: "The number of Papers at the Final level is 8 which are as under: Group I Paper 1: Financial Reporting (100 Marks) Paper 2: Strategic Financial Management (100 Marks) Paper 3: Advanced Auditing and Professional Ethics (100 Marks) Paper 4: Corporate and Economic Laws (100 Marks) Part I: Corporate Laws (70 Marks) Part II: Economic Laws (30 Marks) Group II Paper 5: Strategic Cost Management and Performance Evaluation (100 Marks) Paper 6: Elective Paper (100 Marks) (One to be chosen from the list of Elective Papers) Elective Papers Paper-6A: Risk Management Paper-6B: Financial Services and Capital Markets Paper-6C: International Taxation Paper-6D: Economic Laws Paper-6E: Global Financial Reporting Standards Paper-6F: Multidisciplinary Case Study Paper 7: Direct Tax Laws and International Taxation (100 Marks) Part I: Direct Tax Laws (70 Marks) Part II: International Taxation (30 Marks) Paper 8: Indirect Tax Laws (100 Marks) Part I: Goods and Services Tax (75 Marks) Part II: Customs and FTP (25 Marks)",
        },
        {
          Q: "What is the eligibility to appear in the CA Final exams?",
          A: "The eligibility criteria for appearing in CA Final are the same for all students i.e., after completion of 2.5 years of practical training The students who have never appeared in the old scheme and are now appearing in the CA Final New Scheme must complete AICITSS (Advanced ITT and MCS) followed by qualifying Advanced ITT examination, before appearing for CA Final (New Course)",
        },
        {
          Q: "How can I qualify for each group of Intermediate/ Final Examination?",
          A: "You can qualify each group of Intermediate/ Final Examination by securing 50% in aggregate and 40% in each subject of that group individually.",
        },
        {
          Q: "I have registered for the CPT/ Intermediate (IPC)/ Final Course under the old scheme. What should I do to continue CA Course now?",
          A: "You would have been automatically converted to the corresponding course under the new scheme applicable from July 2017. Since you have not been charged the conversion fee, you are required to pay Rs.1,000/- for ordering the study material from the Centralized Distribution System (CDS) Portal.",
        },
        {
          Q: "I have appeared for the Final examination under the old scheme and now, I have converted to the new scheme. Do I need to undergo MCS and Advanced ICITSS before appearing in the Final examination now?",
          A: "Since you have already appeared for the Final old course examination, you may undergo MCS and Advanced ICITSS after qualifying Final New examination but before applying for membership in the Institute.",
        },
        {
          Q: "What is the procedure for ordering the study material from the CDS portal if the registration has automatically been converted to a new scheme?",
          A: "All the students have automatically been converted to the new scheme in March 2022. Such students will be required to submit Rs.1,000 whenever they are ordering the study material for the new scheme from the CDS portal as they have not paid any conversion charges (Rs.1,000).",
        },
        {
          Q: "How can I download my Registration Letter?",
          A: "Please log in to your SSP dashboard and download the registration letter through the My Letters option under Student Dashboard in SSP.",
        },
        {
          Q: "I have undergone only one i.e., either OC or ITT or MCS or Advanced ITT under the old scheme, do I need to undergo complete ICITSS (OC & ITT)/ Advanced ICITSS (MCS & Adv. ITT) after automatic conversion?",
          A: "A student who has already undergone one i.e., either OC or ITT or MCS or Advanced ITT has to undergo only the remaining course i.e. ICITSS (ITT) or ICITSS (OC) or Advanced ICITSS (Adv. ITT) or Advanced ICITSS (MCS). They are not required to undergo ICITSS (OC & ITT)/ Advanced ICITSS (MCS & Adv. ITT) in entirety.",
        },
        {
          Q: "When is Advanced ICITSS to be undergone?",
          A: "Anytime during the last 2 years of Practical Training but, compulsorily before appearing for Final Examination.",
        },
        {
          Q: "Does a student requires to submit the hard copy of the registration form for CA Foundation/Intermediate/Final to the regional office?",
          A: "No, a student need not submit a hard copy of the form.",
        },
        {
          Q: "What is the process of refund of the extra fee amount paid erroneously while online registration at the students’ dashboard?",
          A: "Prepare a hand-written application citing the reason for refund along with complete details of the payment done i.e. A/C No, date, Name of the Bank, copy of the Bank Statement, etc., and submit/send to Central regional office. Also, send an e-mail to CRO office enclosing scanned copies of the aforementioned documents.",
        },
        {
          Q: "How can a student apply for ATC?",
          A: "A student can claim ATC only if he/she is registered for CA IPC with ATC OR converted to CA IPC with ATC on or before June 30, 2017. Procedure Submit the form for claiming ATC online at the Link: https://resource.cdn.icai.org/14835ATC.pdf Enclose self-attested photocopies of: (i) One-year work experience or Articles completion letter along with duly filled form (ii) Mark-sheets for one (if CA IPC student) or both groups of CA IPC (initially registered for Intermediate old/PE- 2 later converted to CA IPC) and send it to the regional office (the office where you registered and completed your article-ship) and Examination Department.",
        },
        {
          Q: "How are Study Materials made available to students?",
          A: "The study materials are available on CDS. Students can place an order on CDS and make the payment. Materials would be delivered to them at their doorsteps. The study materials are also web hosted at the BOS Knowledge Portal. Students may read/download the study material by navigating to the respective subject in the BOS Knowledge Portal.",
        },
        {
          Q: "Whether any classes are conducted by ICAI for students appearing in Foundation/ Intermediate/ Final Examination?",
          A: "Free virtual classes are conducted by ICAI for all three levels of the CA Course. For details, students may regularly visit Institute’s BOS Knowledge Portal for announcements in this regard.",
        },
        {
          Q: "Whether students can avail exemption in more than one course?",
          A: "Yes. Eligible students can avail of the exemption in more than one course (including ICITSS or AICITSS) subject to the condition that registration in the course(s) falls during the specified period from 1st April 2020 to 31st March 2023.",
        },
        {
          Q: "How can students get the refund of Registration Fees (Foundation, Intermediate, or Final) if already paid and is/are eligible for a refund on account of the death of any parent (Mother/Father) during the defined period of Covid Pandemic?",
          A: "Such Students must fill the Google Form (Link is https://appforms.icai.org/coursefeerefund/) and upload the following documents for a refund of Registration Fees on account of the death of any parent (Mother/Father) during the defined period of Covid Pandemic. Documents to be uploaded:- (i) Attested copy of Death Certificate of Father/ Mother in PDF/JPG format (ii) Attested copy of Identity Proof of Mother/Father, as the case may be. (iii) Student’s Passing Certificate of Class X or XII in PDF/JPG (iv) Cancelled Cheque of the Bank Account in PDF/JPG where a refund is to be credited. Attestation can be done by:- 1. DCOs Heads/Regional Heads/Officer-in-charge of the Branch. 2. Principal under whom such student is registered for Articleship. 3. Central Council Member / Regional Council Member / Managing Committee Member of the Branch.",
        },
        {
          Q: "Whether students would be eligible for availing exemption of fees in case any parent died due to any other illness (other than COVID) during the specified covid pandemic period?",
          A: "Yes. Students are eligible for claiming the exemption of fees in case of the death of any parent due to any illness (other than COVID) during the specified period of the COVID Pandemic.",
        },
      ],
      meta: {
        Title:
          "Top CA Coaching institute in Dwarka, Delhi - Adhyayanam Academy",
        Description:
          "Adhyayanam Academy is the leading CA Coaching Institute in Dwarka, Delhi. Best CA coaching. Most trusted CA coaching institute in Dwarka, Delhi",
        Keywords:
          "CA Coaching, best ca coaching in Dwarka, ca classes in Dwarka, top ca coaching in delhi, best ca coaching institute in Dwarka, best ca coaching institute, coaching for ca exam preparation.",
        url: "https://adhyayanamacademy.com/ca-coaching-in-dwarka",
      },
    },
    {
      mainName: "CS Preparation Coaching in Dwarka Delhi",
      CourseName: "Company Secretary (CS)",
      Description2: `<p>One of the best CS coaching institutes in Dwarka, Adhyayanam Academy provides courses taught by elite company secretaries with years of experience in the field. Combined with the updated teaching methods with respect to industry trends and exam patterns, Adhyayanam Academy is the one of the best coaching institutes for CS exam in Dwarka, Delhi. Learn from the best at Adhyayanam Academy, the top coaching institute for the CS exam in Dwarka, Delhi. Prepare for the CS exam with ease at one of the best CS exam preparation institutes in Delhi.</p>`,
      mainName2: `<p><b><i>&ldquo;The Leading CS Coaching Institute in Dwarka, Delhi&rdquo;</i></b></p>`,
      parms: "cs-coaching-in-dwarka",
      syllabus:
        "https://www.icsi.edu/media/webmodules/11112022_ICSI_Students_leaflet.pdf",
      Description:
        "A Company Secretary is an executive directly assisting one or more directors, or individuals in similar positions, with key day-to-day administrative tasks, thus holding a pivotal managerial position in an organization. Adhyayanam Academy, with veterans in the field of management, administration, and execution of tasks, offers a powerful Company Secretary course that can enable any student to pass CSEET with ease in beginner, intermediate, and advanced coaching classes for acing the Company Secretary (CS) exam. Offering both crash and standard courses, these Adhyayanam Academy in-depth programmes are taught by elite CS executives with years of experience in administration and management.",
      meta: {
        Title:
          "Best CS Coaching institute in Dwarka, Delhi - Adhyayanam Academy",
        Description:
          "One of the top CS coaching institutes in Dwarka. Join the best CS coaching classes now. Be a part of Adhyayanam Academy for the best CS coaching.",
        keywords:
          "top cs coaching, CS Coaching, best cs coaching in Dwarka, cs classes in Dwarka, top cs coaching in delhi, best cs coaching institute in Dwarka, best cs coaching institute, coaching for cs exam preparation, company secretary exam preparation",
        url: "https://adhyayanamacademy.com/cs-coaching-in-dwarka",
      },
    },
    {
      mainName: "CLAT Preparation Coaching in Dwarka Delhi",
      mainName2: `<p><b><i>&ldquo;The Top Coaching Institute for CLAT Preparation in Dwarka, Delhi&rdquo;</i></b></p>`,
      Description2: `<p>Adhyayanam Academy is the top CLAT coaching institute in Dwarka, Delhi. Learn from the veteran educators at the most trusted coaching institute for the CLAT exam in Dwarka. Providing a comprehensive curriculum tailored to enable students with the capacity to crack CLAT with relative ease, Adhyayanam Academy provides the best CLAT preparation coaching in East Delhi. Built upon an in-depth analysis of the Common Law Admission Test exam patterns, this Adhyayanam Academy course provides a platform for CLAT aspirants to propel their path to success from.</p>`,
      CourseName: "CLAT",
      parms: "clat-coaching-in-dwarka",
      meta: {
        Title: "Best CLAT Courses in Dwarka, Delhi | CLAT Classes in Delhi",
        Keywords:
          "top clat coaching in dwarka, clat Coaching, best clat coaching in Dwarka, clat classes in Dwarka, top clat coaching in delhi, best clat coaching institute in Dwarka, best clat coaching institute, coaching for clat exam preparation, Clat exam preparation in delhi.",
        Description:
          "Join the best CLAT coaching classes in Dwarka, Delhi. Be a part of the top coaching institute for CLAT exam preparation in Dwarka. Leading CLAT coaching",
        url: "https://adhyayanamacademy.com/clat-coaching-in-dwarka",
      },
      Description:
        "The Common Law Admission Test (CLAT) is a centralized national-level entrance exam for admission to National Law Universities. Adhyayanam Academy offers integrated courses to students aiming to clear CLAT and become lawyers in the future. Adhyayanam Academy offers a robust course for CLAT aspirants wanting to clear the law entrance exam with a high percentile. To accommodate different needs, Adhyayanam Academy has both a standard course and a crash course to student.",
    },
  ];

  const data = Courses.find((item) => item.parms == slug);

  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.replace("/");
    }
  }, [data, router]);

  if (!data) {
    return null;
  }

  console.log(data?.desc);

  return (
    <>
      <head>
        <title>{data?.meta?.Title}</title>
        <link rel="icon" href="/Logo.png" />
        <meta charset="UTF-8" />
        <link rel="canonical" href={`https://adhyayanamacademy.com/${slug}`} />
        <meta name="description" content={data.meta?.Description} />
        <meta name="keywords" content={data?.meta?.Keywords} />
        <meta property="og:title" content={data?.meta?.Title} />
        <meta property="og:description" content={data.meta?.Description} />
        <meta property="og:image" content="/Logo.png" />

        <meta
          property="og:url"
          content={`https://adhyayanamacademy.com/${slug}`}
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.meta?.Title} />
        <meta name="twitter:description" content={data.meta?.Description} />
        <meta name="twitter:image" content="/Logo.png" />
        <meta
          name="google-site-verification"
          content="6TeTstykRAQJQdvl5CwuIGSAplKKI3S_vobJqN7LpTU"
        />

        {/* <!-- Google Analytics --> */}

        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RPJT35CN2X"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-RPJT35CN2X');
    `}
        </script>

        {/* <!--Schema for all pages --> */}
        {/* 
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Adhyayanam Academy",
            url: "https://adhyayanamacademy.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://adhyayanamacademy.com/{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script> */}
      </head>
      <div className="container">
        {data.mainName !== "" ? (
          <h1 className="text-center text-3xl font-bold text-red py-5 mt-10 md:mt-0">
            {data?.mainName}
          </h1>
        ) : (
          ""
        )}

        {data?.mainName == "" ? (
          <>
            <h1 className="text-center text-3xl font-bold text-red py-10 mt-10 md:mt-0">
              {data?.CourseName}
            </h1>
            <h3 className="text-lg pb-1 text-center">
              {parse(data?.mainName2)}
            </h3>
            <p className="text-lg pb-3 text-justify">
              {parse(data?.Description2)}
            </p>
          </>
        ) : (
          <>
            <h3 className="text-lg pb-1 text-center">
              {parse(data?.mainName2)}
            </h3>
            <p className="text-lg pb-3 text-justify">
              {parse(data?.Description2)}
            </p>
            <h2 className="text-center text-3xl font-bold text-red py-10 mt-10 md:mt-0">
              {data?.CourseName}
            </h2>
          </>
        )}

        {data?.desc ? (
          <div className="pb-3 pt-3">
            <h2 className="text-2xl font-semibold text-red">
              {data?.desc?.heading}
            </h2>
            <h3 className="py-2 font-semibold text-red">
              {data?.desc?.sbheading}
            </h3>
          </div>
        ) : (
          ""
        )}

        <p className="text-lg pb-3">{data.Description}</p>

        {data?.desc?.points?.map((item) => (
          <div key={item}>
            <li className="pt-1">{item}</li>
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {data?.Exams?.map((item) => (
            <div
              key={item}
              className="h-[100px] text-white bg-red hover:bg-dark rounded "
            >
              <p className="text-center text-lg  mb-1 mt-4">{item.title}</p>
              <div className="flex justify-center items-center ">
                <Link
                  href={`/chartered-accountant/${item.parms}`}
                  className="text-center uppercase text-[10px] text-white hover:bg-red rounded px-3 py-1 border"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="my-5 py-5  bg-red">
          <div className="flex justify-center items-center ">
            <h3
              class=" mb-4 text-2xl text-center font-bold font-montserrat text-black sm:text-3xl md:text-[40px] text-white "
              style={{ lineHeight: "3rem" }}
            >
              Connect With Our Counsellor Now!
            </h3>
          </div>
          <div className="flex justify-center item-center mt-3 w-full  ">
            <a
              href="tel:918447690649"
              className="px-6 py-2 bg-dark text-white mx-2 font-montserrat rounded "
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@adhyayanamacademy.com"
              className="px-6 py-2 bg-dark text-white mx-2 font-montserrat rounded "
            >
              Mail Us Now
            </a>
          </div>
        </div>
        {data.crashCourse ? (
          <p className="text-lg pb-3 text-justify">
            {parse(`${data?.crashCourse}`)}
          </p>
        ) : (
          ""
        )}
        {data.syllabus ? (
          <div className=" py-3">
            <button
              type="button"
              class="ml-auto px-4 py-3 bg-dark rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>

              <Link href={data.syllabus} class="ml-2">
                Download Syllabus
              </Link>
            </button>
          </div>
        ) : (
          ""
        )}

        {slug === "cs" ? (
          <div class="container">
            <div class=" py-5">
              <table class="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr class="bg-gray-200">
                    <th class="border border-gray-300 p-2">
                      Examination Information
                    </th>
                    <th class="border border-gray-300 p-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-300 p-2">Examination</td>
                    <td class="border border-gray-300 p-2">
                      Examination is conducted twice a year in June and December
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2">Examination fee</td>
                    <td class="border border-gray-300 p-2">
                      <ul>
                        <li>Foundation Programme - Rs. 1200/-</li>
                        <li>Executive Programme - Rs. 1200/- per Module</li>
                        <li>Professional Programme - Rs. 1200/- per Module</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2">
                      Last date for submission of application for appearing in
                      the examination
                    </td>
                    <td class="border border-gray-300 p-2">
                      <ul>
                        <li>
                          25th March (with late fee of Rs. 250/- till 9th April)
                        </li>
                        <li>
                          25th September (with late fee of Rs. 250/- till 10th
                          October)
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2">
                      Medium of Examination
                    </td>
                    <td class="border border-gray-300 p-2">
                      The Institute allows facility to students to appear in
                      examination in English as well as in Hindi. (Except
                      Business Communication subject of Foundation Program)
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2">Qualifying Marks</td>
                    <td class="border border-gray-300 p-2">
                      A candidate is declared to have passed the Foundation /
                      Executive / Professional examination, if he/she secures at
                      one sitting a minimum of 40% marks in each paper and 50%
                      marks in the aggregate of all subjects.
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2">
                      Time limit for completing CS Examination
                    </td>
                    <td class="border border-gray-300 p-2">
                      A student is required to complete the Executive and the
                      Professional examination within the registration period.
                      However, on payment of requisite fees the validity of
                      registration may be renewed / extended for further period
                      subject to fulfilling the applicable guidelines.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          ""
        )}

        {data.CourseDetails ? (
          <div className="overflow-x-auto font-semibold pb-16">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border text-red px-4 py-2">Section</th>
                  <th className="border text-red px-4 py-2">Subject</th>
                  <th className="border text-red px-4 py-2">Details</th>
                  <th className="border text-red px-4 py-2">
                    Download Syllabus
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.CourseDetails?.sections?.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.section}</td>
                    <td className="border px-4 py-2">{item.subject}</td>
                    <td className="border px-4 py-2">{item.details}</td>
                    <td className="border px-4 py-2">
                      {" "}
                      {item.syllabus ? (
                        <Link href={item?.syllabus}>Download Syllabus</Link>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h2 className="font-bold py-2">Notes:</h2>
              <ul className="list-decimal pl-4 font-normal">
                {data.CourseDetails?.notes?.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}

        {data.FAQs ? (
          <div className="w-full  my-16">
            <h2 className="text-xl font-semibold text-center text-vnet-blue mb-2">
              FAQs For Chartered Accountancy (CA)
            </h2>
            <ul className="flex flex-col">
              {data.FAQs?.map((item, index) => (
                <AccordionItem key={index} title={item.Q} content={item.A} />
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}

        {data.central_universities ? (
          <div>
            <h4 className="text-center text-2xl font-bold text-red py-5">
              List of Central Universities-{" "}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {data.central_universities?.map((item, index) => (
                <p className="p-2" key={index}>
                  {" "}
                  <span className="text-red">{index + 1}</span>. {item}
                </p>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Programs;
