
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full  container pb-5">
      <div
        className="wow fadeInUp  bg-white py-2 pt-6 rounded shadow-one dark:bg-[#1D2144] px-3 xl:px-6"
        data-wow-delay=".1s"
      >
        {/* <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div> */}
        <p className=" border-opacity-10 pb-4 text-base h-[270px]" >
        &quot; {content} &quot;
        </p>
        <div className="flex items-center ">
          <div className="relative mr-1 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            {image ?
              <Image src={image} alt="author" fill />
              : <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" style={{ color: "gray" }}>
                <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              </div>
            }
          </div>
          <div className="w-full h-[50px] flex  items-center">
            <h5 className=" font-semibold text-dark dark:text-white ">
              {name}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
