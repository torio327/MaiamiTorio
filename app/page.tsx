'use client'
import Hero from "@/components/ui/hero";
import AboutMe from "@/components/ui/about-me";
import {gsap} from "gsap";

export default function Home() {
    const gsapHero=()=>{
        gsap.timeline().set('#title', {
            scale: 0,
            opacity: 0
        }).to('#title', {
            scale: 30,
            duration: 1,
            opacity: 1
        })
    }
  return (
   <>
       <Hero gsapHero={gsapHero}/>
       <AboutMe/>
   </>
  );
}
