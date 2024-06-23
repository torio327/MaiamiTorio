import React, {useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {AnimatePresence,motion} from "framer-motion";
import {useMenuAnimation} from "@/gsap/framer-motion";
import Menu from "@/components/ui/menu";
import MenuToggle from "@/components/ui/menu-toggle";


gsap.registerPlugin(useGSAP);

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const scope=useMenuAnimation(isOpen);

    // const handleClick = () => {
    //     setIsOpen(!isOpen);
    // }
    // useGSAP(()=>{
    //     gsap.set('#menu',{
    //         x:0,
    //     })
    //     gsap.to('#menu',{
    //         opacity:0.5,
    //         duration:2
    //     })
    // })


    return (
        <>
            <div ref={scope}>
                <Menu/>
                <MenuToggle isOpen={isOpen} toggle={()=>setIsOpen(!isOpen)}/>
            </div>



            {/*<div>*/}
            {/*    <button onClick={handleClick} className={"flex flex-col justify-center gap-x-2 gap-y-2 items-center"}>*/}

            {/*    </button>*/}

            {/*    <AnimatePresence>*/}
            {/*        {isOpen && (*/}
            {/*            <>*/}
            {/*                <motion.div initial={{right:}} animate={{right: 0}} transition={{duration: 0.5}}*/}
            {/*                            exit={{right: -screen}}*/}
            {/*                            className="fixed  shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20 h-screen z-10 w-full ">*/}
            {/*                    <div className="flex flex-col">*/}
            {/*                        <p>fsf</p>*/}
            {/*                        <p>sfsdf</p>*/}
            {/*                    </div>*/}
            {/*                </motion.div>*/}
            {/*            </>*/}
            {/*        )}*/}
            {/*    </AnimatePresence>*/}

            {/*</div>*/}

        </>
    );
};

export default HamburgerMenu;