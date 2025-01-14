import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Props={
    gsapHero:()=>void
}
const Hero = ({gsapHero}:Props) => {
    const tl = gsap.timeline();


    useGSAP(() => {
        gsapHero();
        // gsap.fromTo("#title",{
        //     scale:0,
        //     opacity:0
        // },{
        //     scale:30,
        //     duration:1,
        //     opacity:1
        // })

        // gsap.fromTo("#welcome",{

        // },{

        // })
        // gsap.fromTo("#explanation",{
        //     opacity:0
        // },{
        //     opacity:1,
        //     duration:4
        // })
    },[]);
    return (
        <>
            <section
                className="ezy__sheader5_9dQhItyA bg-center bg-no-repeat bg-contain relative z-[1] bg-white dark:bg-[#0b1727] text-white overflow-hidden py-24 md:py-48"

            >
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 opacity-90 -z-[1]"
                    style={{background: "linear-gradient(to right, #0ba6f9, #33f3e4)"}}
                ></div>
                <div className="container px-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                            <h1 id={"title"} className="text-[1px] lg:text-[3px] font-bold leading-snug">
                                <span id={"welcome"}>W</span>
                                <span id={"welcome"}>e</span>
                                <span id={"welcome"}>l</span>
                                <span id={"welcome"}>c</span>
                                <span id={"welcome"}>o</span>
                                <span id={"welcome"}>m</span>
                                <span id={"welcome"}>e</span>
                                <span id={"welcome"}> </span>
                                <span id={"welcome"}>t</span>
                                <span id={"welcome"}>o</span>
                                <span id={"welcome"}> </span>
                                <span id={"welcome"}>M</span>
                                <span id={"welcome"}>a</span>
                                <span id={"welcome"}>i</span>
                                <span id={"welcome"}>a</span>
                                <span id={"welcome"}>m</span>
                                <span id={"welcome"}>i</span>
                                <span id={"welcome"}>T</span>
                                <span id={"welcome"}>o</span>
                                <span id={"welcome"}>r</span>
                                <span id={"welcome"}>i</span>
                                <span id={"welcome"}>o</span>
                            </h1>
                            <p id={'explanation'} className=" text-xl leading-normal opacity-75 mt-6">
                                ブログと作品がまとめてあります
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;