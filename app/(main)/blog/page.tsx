import React from 'react';
import BlogList from "@/app/(main)/blog/blog-list";
import {client} from "@/libs/client";


interface zenArticles{
    id:number,
    title:string,
    path:string,
    comments_counts:number,
    liked_count:number,
    article_type:string,
    emoji:string,
    published_at: string,
    body_updated_at: string,
}
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
}
const Page =async () => {
    const zenBlogData=await fetch(`https://zenn.dev/api/articles?username=maiamitorio&order=latest`,{cache:'no-store'});
    const microCMSData=await client.get({
        endpoint:'blogthree',
    });

    const zenBlog=await zenBlogData.json();
    const zenArticles:zenArticles[]= zenBlog.articles;

    const microCMSArticles:microCMSArticles[]=microCMSData.contents;

    return (
        <div className={"bg-slate-200"}>
            <BlogList zenArticles={zenArticles} microCMSArticles={microCMSArticles}/>
        </div>
    );
};

export default Page;