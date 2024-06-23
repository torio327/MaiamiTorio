import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <nav className={"fixed  shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20 h-screen z-10 w-full flex justify-center items-center"}>
            <ul className={"text-white flex flex-col text-2xl gap-y-8"}>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li> <Link href={"/work"}>Work</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;