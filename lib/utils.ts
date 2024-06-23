import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatFullDate=(date:string)=>{
  const formattedDate:string=dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM_DD");
  return formattedDate;
}

export const formatDate=(date:any)=>{
  const formattedDate:string=dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM");
  return formattedDate;
}

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
  id:number,
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

export const groupByZen=function (zenArticles:zenArticles[]){
  return zenArticles.reduce(function (group:any,x){
    const yearMonthString=formatDate(new Date(x["published_at"]));
    (group[yearMonthString]=group[yearMonthString]||[]).push(x);
    return group;
  },{});
}
export const groupByMicroCMS=function (microCMSArticles:microCMSArticles[]){
  return microCMSArticles.reduce(function (group:any,x){
    const yearMonthString=formatDate(new Date(x["publishedAt"]));
    (group[yearMonthString]=group[yearMonthString]||[]).push(x);
    return group;
  },{});
}


//4月だけ取り出す