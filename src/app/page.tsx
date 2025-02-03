'use client'
import Image from "next/image";
import Card from "../components/Card";
import Jeremy from '@/public/image-jeremy.png'
import { data } from "@/constants/time-tracker-data";
import { useState } from "react";
import { TimeFrameType } from "@/time-tracker-types";
import { motion } from "framer-motion";
import { staggerContainer, Fade } from "@/utils/motion";

export default function Home() {

  const [timeFrameType, setTimeFrameType] = useState<TimeFrameType>('daily');

  const handleTimeFrame = (timeFrame: TimeFrameType) => {
    setTimeFrameType(timeFrame);
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 container lg:max-w-[1140px] mx-auto gap-6 lg:gap-8 px-6 py-20">
      <motion.section
        variants={Fade()}
        initial="hidden"
        animate="show"
        className="col-span-1 lg:row-span-2 bg-darkBlue rounded-2xl overflow-hidden h-full">

        <article className="flex lg:block gap-4 items-center bg-blue px-7 py-8 rounded-2xl h-[70%]">
          <div className="bg-paleBlue p-1 overflow-hidden w-fit h-fit rounded-full">
            <Image src={Jeremy} alt="Jeremy" className=" w-[4rem] lg:w-[5rem]"/>
          </div>
          <div className="lg:mt-10">
            <p className="text-paleBlue">Reports for</p>
            <h2 className="text-2xl lg:text-3xl text-white"> Jeremy Robson</h2>
          </div>
        </article>
          <ul className="px-8 py-6 flex justify-between lg:flex-col gap-4">
            <li>
              <button onClick={() => handleTimeFrame('daily')} className={`${timeFrameType == "daily" && "text-white"} hover:text-white`}>Daily</button>
            </li>
            <li>
              <button onClick={() => handleTimeFrame('weekly')} className={`${timeFrameType == "weekly" && "text-white"} hover:text-white`}>Weekly</button>
              </li>
            <li>
              <button onClick={() => handleTimeFrame('monthly')} className={`${timeFrameType == "monthly" && "text-white"} hover:text-white`}>Monthly</button>
              </li>
          </ul>
      </motion.section>

      <motion.section 
        variants={staggerContainer(0.3, 0.3)}
        initial="hidden"
        animate="show"
        className="col-span-1 lg:col-span-3 row-span-2 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {data.map((item, index) => (
          <Card key={index}
            {...item}
          timeFrameType={timeFrameType}
          />
        ))}
      </motion.section>
      
    </main>
  );
}
