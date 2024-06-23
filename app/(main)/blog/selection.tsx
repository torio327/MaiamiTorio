
import React, {useEffect, useRef} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ZenCard from "@/app/(main)/blog/zen-card";
import MicroCMSCard from "@/app/(main)/blog/microCMS-card";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {popUp} from "@/gsap/gsap";
import {motion} from "framer-motion";

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
gsap.registerPlugin(useGSAP);

const Selection = ({zenArticles,microCMSArticles}:Props) => {
    useGSAP(()=>{
        popUp('#zenCard');

    },
    )
    return (
        <div className={""}>
            <Tabs defaultValue={"tech"} className={"flex flex-col justify-center"}>
                <TabsList className={"flex gap-x-20"}>
                    <TabsTrigger value={"tech"}>Tech</TabsTrigger>
                    <TabsTrigger value={"private"}>Private</TabsTrigger>
                </TabsList>
                <TabsContent value={"tech"}>
                    <div id={"zenBlog"} className={"grid md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                        {zenArticles.map((article) => (
                            <motion.div  key={article.id}  whileHover={{scale:1.1,transition:{delay:0.3}}}  className={"p-2"}  id={"zenCard"}>
                                <ZenCard id={article.id} path={article.path}
                                         liked_count={article.liked_count} article_type={article.article_type}
                                         emoji={article.emoji} title={article.title} published_at={article.published_at}
                                         body_updated_at={article.body_updated_at}/>
                            </motion.div>
                        ))}
                    </div>

                </TabsContent>
                <TabsContent value={"private"}>
                    <div className={" grid md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                        {microCMSArticles.map((article) => (
                            <motion.div key={article.id}  whileHover={{scale:1.1,transition:{delay:0.3}}}  className={"p-2"}>
                                <MicroCMSCard id={article.id} thumbnail={article.thumbnail.url}
                                              title={article.title} publishedAt={article.publishedAt}
                                              updatedAt={article.updatedAt} content={article.content}/>
                            </motion.div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Selection;