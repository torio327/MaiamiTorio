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

    return (
        <>
            <div ref={scope}>
                <Menu/>
                <MenuToggle isOpen={isOpen} toggle={()=>setIsOpen(!isOpen)}/>
            </div>
        </>
    );
};

export default HamburgerMenu;