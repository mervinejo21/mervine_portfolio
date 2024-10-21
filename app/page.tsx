"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import {RecentProjects} from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
      </div>
    </main>
  );
};

export default Home;