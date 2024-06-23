import React from 'react';
import {formatFullDate} from "@/lib/utils";
import Link from "next/link";

type Props={
    id:number,
    path:string,
    liked_count:number,
    article_type:string,
    emoji:string,
    title:string,
    published_at:string,
    body_updated_at:string
}
const ZenCard = ({id,path,article_type,emoji,title,published_at,body_updated_at}:Props) => {
    return (
        <>
         <article className={"rounded-xl bg-white  flex h-fit flex-col gap-y-4 justify-center "}>
             <Link href={`https://zenn.dev/${path}`}>
             <div className={"rounded-xl bg-blue-200 flex flex-col justify-center p-4"}>
                 <div className={"rounded-xl p-1 bg-blue-500 w-fit"}>
                     <p className={" text-white"}>{article_type}</p>
                 </div>
                 <p className={"text-5xl text-center mb-4"}>{emoji}</p>
             </div>
             <div className={" text-center text-slate-700 h-14"}>{title}</div>
             <div className={"mb-4 text-slate-300 text-center"}>
                 <p><span className={"mr-2"}>公開日</span>{formatFullDate(published_at)}</p>
                 <p><span className={"mr-2"}>更新日</span>{formatFullDate(body_updated_at)}</p>
             </div></Link>
         </article>
        </>
    );
};

export default ZenCard;