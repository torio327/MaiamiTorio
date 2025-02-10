import React from 'react';
import Image from "next/image";
import "./about-me.css"

const AboutMe = () => {
    return (
        <>
            <section className="ezy__about12 pt-14 md:pt-24 bg-blue-200 dark:bg-[#0b1727] text-zinc-900 dark:text-white pb-10">
                <div className="container px-4">
                    <div className="grid grid-cols-12 gap-5 justify-center items-center">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="lg:px-7">
                                <h1 role={'heading'} className="uppercase text-4xl md:text-6xl leading-tight font-medium mb-2">
                                    ABOUT ME
                                </h1>
                                <p id={"description"} className="text-lg leading-normal opacity-75 my-6">
                                    プログラミングと普通ではない挑戦が好きな少し変わった大学生です。 子供のころから、
                                    折り紙や紙工作など何かを作ることが好きでした。
                                    高校の頃, 友達に「プログラミングをやってみないか」と言われたことがきっかけで始めました。
                                    <br/>
                                    高校は工業高校で、機械について勉強していました。高校卒業後は、金沢大学に進学し、現在はフロンティア工学類（機械と電子情報を組み合わせた学類）に所属しています。
                                    最近の趣味は、ランニングと一人旅です。直近で行った一人旅では、ベトナムのハノイに行きました。
                                   。
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div id={"myPicture"} className="flex justify-center lg:justify-start lg:ml-12 ">
                                <Image src={"/aboutMe.jpeg"} alt={"me"} width={300} height={400} className={"rounded-xl"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;