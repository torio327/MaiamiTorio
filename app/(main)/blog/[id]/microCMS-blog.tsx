import React from 'react';
import Image from "next/image";


type Props = {
    microCMSArticle: {
        id: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        revisedAt: string,
        title: string,
        thumbnail: {
            url: string,
            height: number,
            width: number
        },
        content: string,
        image: []
    }
};
const MicroCmsBlog = ({microCMSArticle}:Props) => {

    return (
        <>
            <div className="mt-14">
                <h1 className={'mx-10 text-5xl text-center'}>{microCMSArticle.title}</h1>
                <Image src={microCMSArticle.thumbnail.url} alt={'thumbnail'} width={600} height={400} className={'mx-auto mt-24'}/>
                <div className="flex justify-center mx-5">
                    <div dangerouslySetInnerHTML={{__html: microCMSArticle.content}}
                         className={'mt-10 mb-20 w-[900px] leading-10'}/>
                </div>
            </div>
        </>
    );
};

export default MicroCmsBlog;