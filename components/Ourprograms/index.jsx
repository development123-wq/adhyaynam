import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const Ourprograms = () => {
  const data = [
    {
      title: "cuet",
      img: "/img/cuet.jpg",

      parms: "common-university-entrance-test-in-dwarka",
    },
    {
      title: "ca",
      img: "/img/2.png",
      parms: "ca-coaching-in-dwarka",
    },
    {
      title: "cs",
      img: "/img/3.png",
      parms: "cs-coaching-in-dwarka",
    },
    {
      title: "clat",
      img: "/img/clat.png",
      parms: "clat-coaching-in-dwarka",
    },
    {
      title: "xi & xii commerce",
      img: "/img/11th&12.jpeg",
      parms: "commerce-coaching-in-dwarka",
    },
    {
      title: "IX & X all subjects",
      img: "/img/9th&10.jpg",
      parms: "coaching-for-ix-and-x",
    },
    {
      title: "Neev",
      img: "/img/neev.jpeg",
      parms: "neev-for-xi-students-in-dwarka",
    },
    {
      title: "Imarat",
      img: "/img/Imarat.jpeg",
      parms: "imarat-for-xi-students-in-dwarka",
    },
    {
      title: "Anant",
      img: "/img/Anant.jpeg",
      parms: "anant-for-xii-students-in-dwarka",
    },
  ];

  return (
    <>
      <section id="Ourprograms" className=" py-10">
        <div className="sm:container mx-auto sm:px-10  px-2">
          <SectionTitle title="OUR COURSES" paragraph="" center width="100%" />

          <section class=" py-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {data.map((item) => (
                // <div key={item} class="menu-item h-[180px]  w-full fruits pt-3" style={{ backgroundImage: `url('${item.img}')`, backgroundSize: "contain" }}>
                //   <Link href={`/${item.parms}`}>
                //     <div class="first-frame p-2 transition duration-300  hover:scale-110 ">
                //       <p className="pb-2"> <Link href={`/${item.parms}`} className="text-dark bg-white border border-white hover:border-red hover:bg-red hover:text-white px-2 py-2 m-2 ">View Details</Link></p>
                //     </div>
                //   </Link>
                //   <h3 className="uppercase  text-2xl  pt-20 mt-5  ">
                //     <span className="uppercase text-white rounded px-3 py-1 bg-dark">{item.title}</span>
                //   </h3>
                // </div>
                <div key={item} className=" border p-2 w-100 hover:border-red">
                  <Link href={`/${item.parms}`}>
                    <div className=" flex justify-center items-center hover-group">
                      <img
                        className="transition duration-300 hover:scale-110"
                        alt={item.title}
                        src={`${item.img}`}
                        style={{ objectFit: "cover", height: "120px" }}
                      />
                    </div>
                    <h3 className="uppercase hover:bg-red text-1xl font-bold text-center mt-5 text-white rounded px-2 py-1 bg-dark ">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* <div className="w-100  banner"> 
            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
              {featuresData.map((feature) => (
                <div
                  key={feature.id}

                  className="block  bg-white  dark:bg-neutral-700 sm:p-1 pt-5 "
                >
                  <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      className="rounded-t-lg"
                      src={feature.image}
                      alt={feature.title}
                    />
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2 pt-3 bg-black/5 " style={{ height: '220px' }}>
                    <hr className="mb-1" />
                    <hr />
                    <div className="flex justify-center mb-2 bg-black/0 -mt-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50" >
                      <span className=" p-1 bg-dark rounded  font-medium text-white shadow-[0_4px_9px_-4px_#3b71ca] text-sm" > {feature.title} </span>
                    </div>

                    <h6 className="mb-2    leading-tight font-bold dark:text-neutral-50 " style={{ textAlign: "center" }}>
                      {feature.subtitle}
                    </h6>
                    <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200" style={{ textAlign: "center" }}>
                      {feature.paragraph}
                    </p> 
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Ourprograms;
