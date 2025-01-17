import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {formatFullDate} from "@/lib/utils";

type Props = {
    id: string,
    thumbnail: string,
    title: string,
    publishedAt: string,
    updatedAt?: string,
    content: string
}

const MicroCMSCard = ({id, thumbnail, title, publishedAt, updatedAt, content}: Props) => {
    return (
        <>
            <div className={"rounded-xl bg-white flex flex-col items-center justify-center gap-y-3 p-4"}>
                <div className={"w-[300px] h-[300px] rounded-lg"}>
                    <Image src={thumbnail} alt={title} width={300} height={200} className={"rounded-xl"}/>
                </div>
                <h1 className={"text-xl mt-4 text-center h-20 underline"}>{title}</h1>
                <div className={"h-14"}>
                    <p className={""}><span className={"mr-2"}>公開日</span>{formatFullDate(publishedAt)}</p>
                    <div> {updatedAt && (
                        <p><span className={"mr-2"}>更新日</span>{formatFullDate(updatedAt)}</p>)}
                    </div>
                </div>
                <div/>
                <div dangerouslySetInnerHTML={{__html: content}} className={"h-12 overflow-hidden text-center"}/>
                <div className={"p-4 border border-blue-500 border-1 active:border-b-0 hover:text-white"}>
                    <Link href={`/blog/${id}`}>
                        Read More
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MicroCMSCard;