import React from 'react';

type Props={
    about:string,
    description:string
}
const About = ({about,description}:Props) => {
    return (
        <section className="ezy__sheader3 py-14 md:py-24 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <h1 className="text-[35px] leading-tight md:text-6xl font-bold">
                            {about}
                        </h1>
                        <p className="text-xl leading-snug opacity-75 mt-6 md:px-8 lg:px-20">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;