"use client";

import { Brand } from "@/components/Brand";
import { Banner } from "@/components/Banner";
import { Tool } from "@/components/tools";

import { Social } from "@/components/social";
import { Question } from "@/components/Question";
import { Download } from "@/components/Download";
import { Review } from "@/components/Review";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />

      <Brand />
      <Tool />
      <Social />
      <div className="w-full inline-flex flex-col justify-center items-center">
        <NavBar />
        <div className="w-full bg-gradient-to-b from-zinc-100 to-zinc-100">
          <Review />
          <Download />
          <Question />
        </div>
      </div>
      <Footer />
    </>
  );
}
