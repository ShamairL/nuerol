"use client";

import { navItems } from "@/data";
import dynamic from 'next/dynamic';

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
