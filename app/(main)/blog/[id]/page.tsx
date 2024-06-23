import React from 'react';
import {client} from "@/libs/client";
import MicroCMSBlog from "@/app/(main)/blog/[id]/microCMS-blog";
// type Props={
//     params:{params:{id:string}}
// }
interface microCMSArticles{
    id:string,
    createdAt:string,
    updatedAt:string,
    publishedAt:string,
    revisedAt:string,
    title:string,
    thumbnail:{
        url:string,
        height:number,
        width:number
    },
    content:string,
    image:[]
};
const Page = async ({params}:{params:{id:string}}) => {
    const microCMSData=await client.get({
        endpoint:'blogthree',
    });
    const microCMSArticles:microCMSArticles[]=microCMSData.contents;
    const microCMSArticle:microCMSArticles=microCMSArticles.filter((article:microCMSArticles)=>article.id===params.id)[0]
    return (
        <div>
            <MicroCMSBlog microCMSArticle={microCMSArticle}/>
        </div>
    );
};

export default Page;