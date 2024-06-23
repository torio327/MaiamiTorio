'use client';
import React, {useState} from 'react';
import Link from "next/link";
import HamburgerMenu from "@/components/ui/hamburger-menu";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <>
        <header className={"flex h-20 items-center justify-between p-4"}>
            <div><Link href={"/"} className={"md:text-3xl lg:text-4xl font-bold"}>MaiamiTorio</Link></div>
            <div className={"hidden lg:flex lg:text-2xl lg:gap-x-20 lg:mr-40"}>
                <Link href={"/blog"} className={" border-blue-500 hover:border-b-2"}>Blog</Link>
                <Link href={"/work"} className={"border-blue-500 hover:border-b-2"}>Work</Link>
            </div>
            <div className={"   lg:hidden"}>
                <HamburgerMenu/>
            </div>
        </header>
        </>
    );
};

export default Header;