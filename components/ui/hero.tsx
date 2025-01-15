import React from 'react';
import "./hero.css"

const Hero = () => {
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
                            <h1 id={"title"} className="welcome">
                                Welcome to MaiamiTorio
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