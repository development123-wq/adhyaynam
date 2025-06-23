
const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "10px",
  text='center'
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className=" mb-4  text-2xl  !leading-tight text-black dark:text-white sm:text-3xl md:text-[45px] " style={{ fontWeight: "500", textTransform:'capitalize' }}>
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-black md:text-lg " style={{textAlign:text}}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
