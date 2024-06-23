import React from 'react';
import Link from "next/link";
import Image from "next/image";

type Props = {
   gitHumWorks: {
       id: number,
       node_id: string,
       name: string,
       full_name: string,
       private: boolean,
       homepage: string,
       avatar_url: string
   }[]
}

const WorkList = ({gitHumWorks}:Props) => {
    return (
        <>
            {gitHumWorks.map((work)=>(
                <div key={work.id}>
                    {work.homepage&&(
                        <Link href={work.homepage} className={"text-blue-500"}>{work.name}</Link>
                    )}
                    <Image src={work.avatar_url} alt={"avatar"} width={30} height={30}/>
                </div>
            ))}
        </>
    );
};

export default WorkList;