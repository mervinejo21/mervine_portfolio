"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Certifications } from "@/components/Certifications";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto px-4 sm:px-6 md:px-10 overflow-clip">
      <div className="w-full max-w-[90rem]">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <Certifications />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;