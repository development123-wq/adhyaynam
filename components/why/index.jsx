import React from "react";

const WhyChouse = () => {
  const data = [
    {
      title: "+ Taught Students",
      img: "/svg/users.svg",
      data: "200,000",
    },
    {
      title: "+ AIR's In CA & CS",
      img: "/svg/graduation-cap.svg",
      data: "200 ",
    },
    {
      title: "+ Exemptions",
      img: "/svg/trophy.svg",
      data: "20,000",
    },
  ];

  return (
    <section className="container pt-5 ">
      <div className="grid sm:grid-cols-3  grid-cols-1 ">
        {data.map((e, index) => (
          <div
            key={index}
            className="flex justify-center align-center mb-2 sm:mb-10"
          >
            <div className="">
              <div className="flex justify-center align-center">
                <img src={e.img} className="w-[75px] h-[75px]" alt={e.title} />
              </div>
              <div className="mt-2">
                <h3 className="font-semibold text-xl  text-center">{e.data}</h3>
                <h3 className="font-medium text-xl  text-center"> {e.title}</h3>
                {/* <p className="text-sm text-center"> {e.desc}</p> */}
                {/* ghj */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChouse;
