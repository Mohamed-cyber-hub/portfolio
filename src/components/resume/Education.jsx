import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lg:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="School Education"
            subTitle="Hadayek Al Maadi Experimental Language School "
          />
          <ResumeCard
            title="Helwan University Bachelor of Law"
            subTitle="Faculty of Law Helwan University (2018 - 2022)"
            result="Grade: Very Good"
            des="Studied at Helwan University for a Bachelor of Law degree in the Faculty of Law. Completed my studies at Helwan University, where I received my Bachelor of Law degree in the Faculty of Law."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SEO Specialist"
            subTitle="Egypt United Tours - (2022 - Present)"
            result="Egypt"
            des=" Worked as an SEO Specialist at Egypt United Tours, where I focused on optimizing website rankings and content for search engines."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="Mycompound - (April: 2023 -August: 2023)"
            result="Egypt"
            des="I worked as a Frontend Developer at Mycompound, where I focused on building and maintaining responsive and user-friendly websites."
          />
          <ResumeCard
            title="Tour Operator"
            subTitle="Egypt United Tours  - (September: 2022 - February: 2022)"
            result="Egypt"
            des=" Worked as a Tour Operator at Egypt United Tours, where I focused on providing personalized tours and ensuring a safe and enjoyable experience for visitors."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
