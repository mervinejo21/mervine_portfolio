"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "Udemy: Node with React: Fullstack Web Development",
    description:
      "This certificate recognizes the successful completion of a full-stack web development course, covering React, Redux, Express, and MongoDB. The recipient has demonstrated skills in building web applications, handling authentication, processing payments, and managing deployment, with practical experience in backend email integration.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/udemy.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="udemy certificate"
        />
      </div>
    ),
  },
  {
    title: "HackerRank: Problem Solving. ",
    description:
      "It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/hackerrank.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="hackerrank certificate"
        />
      </div>
    ),
  },
  {
    title: "Hackathon",
    description:
      "Participated in a 72-hour hackathon organized by the Government of Kerala, where I collaborated with a team to develop a web application using React, Node.js, and MongoDB. The project aimed to address a real-world problem by providing a platform for users to connect and share their ideas effectively.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/hackathon.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="hackerrank certificate"
        />
      </div>
    ),
  },
  {
    title: "Bachelor's Degree",
    description:
      "Completed my Bachelor's degree in Computer Science and Engineering at the University of Kerala, where I gained a solid foundation in computer science, algorithms, data structures, and software development.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image
          src="/degree.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="degree certificate"
        />
      </div>
    ),
  },
];
export function Certifications() {
  return (
    <div className="py-20" id="certifications">
        <h1 className="heading pb-20">
        My <span className="text-purple">Certifications</span>
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
