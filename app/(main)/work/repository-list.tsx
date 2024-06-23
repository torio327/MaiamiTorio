'use client'
import React from 'react';
import About from "@/components/ui/about";
import Card from "@/app/(main)/work/card";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {popUp} from "@/gsap/gsap";
import {motion} from "framer-motion";

type Props = {
   gitHubRepositories:  {
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
   }[]
}
gsap.registerPlugin(useGSAP);

const RepositoryList = ({gitHubRepositories}:Props) => {
    useGSAP(()=>{
        popUp('#card')
    })
    return (
        <>
            <About about={"Work"} description={"制作した作品が見れます"}/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gitHubRepositories.map((repository)=>(
                    <motion.div key={repository.id}  whileHover={{scale:1.1,transition:{delay:0.3}}}  className={"p-2"} id={"card"}>
                        <Card repository={repository}/>
                    </motion.div>
                ))}
            </div>

        </>
    );
};

export default RepositoryList;