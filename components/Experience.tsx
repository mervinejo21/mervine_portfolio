import React from "react";
import Image from "next/image";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-10 sm:py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 sm:mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 lg:gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-row items-center p-3 py-4 sm:p-5 md:py-12 lg:py-14 lg:p-6 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={96}
                height={96}
                className="w-12 sm:w-16 md:w-20 lg:w-24"
              />
              <div className="ms-3 sm:ms-4 lg:ms-5">
                <h1 className="text-start text-lg sm:text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-2 sm:mt-3 text-sm sm:text-base font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;