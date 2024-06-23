'use client';
import React from 'react';
import Selection from "@/app/(main)/blog/selection";
import About from "@/components/ui/about";

type Props={
    zenArticles:{
        id:number,
        title:string,
        path:string,
        comments_counts:number,
        liked_count:number,
        article_type:string,
        emoji:string,
        published_at: string,
        body_updated_at: string,
    }[];
    microCMSArticles:{
        id:string,
        createdAt:string,
        updatedAt?:string,
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
    }[];
}

const BlogList = ({zenArticles,microCMSArticles}:Props) => {

    return (
        <div className={"p-4 pb-10"}>
            <About about={"Blog"} description={"テックブログとプライベートブログが読めます"}/>
         <Selection zenArticles={zenArticles} microCMSArticles={microCMSArticles}/>
        </div>
    );
};

export default BlogList;