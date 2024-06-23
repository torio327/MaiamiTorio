import React from 'react';
import RepositoryList from "@/app/(main)/work/repository-list";

interface gitHubRepository {
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
}
const Page = async () => {
    const gitHubData=await fetch("https://api.github.com/users/torio327/repos",{cache:"no-store"})
    const gitHubAllRepositories:gitHubRepository[]=await gitHubData.json();
    const gitHubRepositories=gitHubAllRepositories.filter((repository)=>repository.homepage!=null)

    console.log(gitHubRepositories)
    return (
        <>
            <div className={"bg-blue-200 p-4 pb-10"}>
                <RepositoryList gitHubRepositories={gitHubRepositories}/>
            </div>
        </>
    );
};

export default Page;