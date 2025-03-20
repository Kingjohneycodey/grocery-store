"use client"
import Catogories from "@/components/home/Catogories";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";


export default function Home() {
  return (
    <div>
      <div className="">
        <Header/>
        <Hero/>

        <Catogories />

      </div>
    </div>
  );
}
