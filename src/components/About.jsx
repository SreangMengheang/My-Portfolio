import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-4 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Currently a computer science student who looking for a job opportunity.
              Even I never have work experience before but with my passion and
              commitment I believe I am good candidate for this position. l am very
              exciting and cannot wait to use what I have learn in school.
            </p>
          </div>
        </div>
        <img src={about} className="mx-auto rounded-3xl py-8 md:py-0" alt="" />
      </div>
    </div>
  );
};

export default About;
