"use client";

import { Brand } from "@/components/Brand";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Tool } from "@/components/tools";

import { Social } from "@/components/social";
import { Footer } from "@/components/Footer";
import { Question } from "@/components/Question";
import { Download } from "@/components/Download";
import { Review } from "@/components/Review";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-row justify-center">
      <div className="bg-home-bg-gradient bg-top absolute z-0 top-0 left-0" />
      <div className="relative h-screen w-full">
        <div className="w-full">
          <Header />
          <Banner />

          <Brand />
          <Tool />
          <Social />
        </div>
        <div className="w-full inline-flex flex-col justify-center items-center">
          <NavBar />
          <div className="w-full bg-gradient-to-b from-zinc-100 to-zinc-100">
            <Review />
            <Download />
            <Question />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
