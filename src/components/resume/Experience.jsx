import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2010 - 2022
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Job Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2001 - 2020
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Trainer Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
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
      </div>
    </motion.div>
  );
};

export default Experience;
