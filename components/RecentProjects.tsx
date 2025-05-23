"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Image from "next/image";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures this part is rendered only after client-side mounting
  }, []);

  // Don't render until the component is mounted to avoid hydration mismatch
  if (!isMounted) return null;

  return (
    <div className="py-10" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-2 sm:p-4 gap-x-8 sm:gap-x-16 gap-y-10 sm:gap-y-20 mt-6 sm:mt-10">
        {projects.map((item) => (
          <div
            className="min-h-[18rem] sm:min-h-[22rem] lg:min-h-[26rem] flex items-center justify-center w-[90vw] sm:w-96 mb-4 sm:mb-8"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              <div className="relative flex items-center justify-center w-full sm:w-96 overflow-hidden h-[18vh] sm:h-[20vh] lg:h-[30vh] mb-6 sm:mb-10">
                <div
                  className="relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt="bgimg"
                    fill
                    className="object-cover"
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  width={300}
                  height={300}
                  className="z-10 absolute bottom-0 max-w-full h-auto"
                />
              </div>

              <h1 className="font-bold text-lg sm:text-xl lg:text-2xl line-clamp-1">
                {item.title}
              </h1>

              <p
                className="text-sm sm:text-base lg:text-xl font-light lg:font-normal line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "0.5vh 0 1vh",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-4 sm:mt-7 mb-2 sm:mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${4 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`icon${index + 1}`}
                        width={32}
                        height={32}
                        className="p-1.5 sm:p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex text-sm sm:text-base lg:text-xl text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-2 sm:ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
