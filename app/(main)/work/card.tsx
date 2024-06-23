import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Eye} from "lucide-react";
import {motion} from "framer-motion";

type Props={
    repository: {
        id:number,
        node_id: string,
        name: string,
        full_name: string,
        private:boolean,
        homepage:string,
        owner:{
            login:string,
            avatar_url:string
        },
        description:string,
        html_url:string
    }
}

const Card = ({repository}:Props) => {
    return (
        <>
            <div className={"w-full flex flex-col p-4 bg-white rounded-xl"}>

                <div className={"border-green-500 flex "}>
                    <div className={"w-1/3"}>
                        <div className={"rounded-full border-slate-400 border-2 w-[60px] h-[60px] mx-auto flex items-center"}>
                            <Image src={repository.owner.avatar_url} alt={""} width={40} height={40} className={" mx-auto  "}/>
                        </div>
                        <p className={"text-center"}>{repository.owner.login}</p>
                    </div>


                <div className={"flex flex-col w-2/3 gap-y-4"}>
                    <h1 className={" text-2xl h-14 font-medium"}>{repository.name}</h1>
                    <div className={" text-slate-400 h-28"}>{repository.description}</div>
                </div>
            </div>
                <div className={"flex rounded-xl bg-slate-200 justify-center items-center gap-x-10 h-20"}>
                    <motion.div whileTap={{scale:0.8}} className={"flex gap-x-1 items-center rounded-xl bg-black px-2 py-1.5"}>
                        <Image src={"/github-mark-white.png"} alt={"github-icon"} width={30} height={30}/>
                        <Link href={repository.html_url} className={"text-white"}>GitHub</Link>
                    </motion.div>

                    {repository.homepage && (
                        <motion.div whileTap={{scale:0.8}} className={"flex gap-x-1 items-center bg-white rounded-xl  px-2 py-1.5"}>
                            <Eye/>
                            <Link href={repository.homepage} className={""}>作品を見る</Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Card;