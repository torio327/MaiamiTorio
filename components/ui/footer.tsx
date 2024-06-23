import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col bg-white h-32">
                <div className={"my-6"}>
                    <h1 className={"font-bold text-center"}>
                    <Link href={"/"}>MaiamiTorio</Link>
                    </h1>
                </div>
                <div>
                    <div className={"flex justify-center gap-x-8"}>
                        <Link href={"https://www.facebook.com/profile.php?id=100014073108202"}><Image src={"/facebook.png"} alt={"facebook-icon"} width={40} height={40}/></Link>
                        {/*<Link href={"/"}> <Image src={"/twitterx.png"} alt={"twitter-icon"} width={40} height={40}/></Link>*/}
                        <Link href={"https://github.com/torio327"}> <Image src={"/github-mark.png"} alt={"github-icon"} width={40} height={40}/></Link>


                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;