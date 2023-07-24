'use client'
import { createClient } from "next-sanity"
import { usePathname } from 'next/navigation' 
import { Suspense, useState } from "react"

import useSWR from 'swr'

const client = createClient({
    projectId: "v3dbl7rx",
    dataset: "production",
    apiVersion: "v2021-10-21",
    useCdn: false
  })




// async function fetchPost(){
//     const path = usePathname();
//     const slugP = path.split('/')[2]
//     console.log(slugP)
//     const data  = useAsync(()=> client.fetch(`*[_type == "testblog"] && slug == ${slugP}`))
//     return data
// }

const fetcher = (path) => fetch(`${path}`).then(res => res.json())


export default function Post(){
    const [post, setPost] = useState({name: "parikshit"});
    const path = usePathname();
    const slugP = path.split('/')[2]
    // console.log(slugP);
    const api = `https://v3dbl7rx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22testblog%22+%26%26+slug+%3D%3D%22${slugP}%22%5D`
    // console.log(api);
    const {data, error, isloading} = useSWR(api,fetcher)
    if(isloading){
        return <div> loading... </div>
    }
    else if(error){
        return <div>error</div>
    }
    else{
        console.log(data);
        return (
            <div>
                <div>
                    {/* {data.result[0].name} */}
                    "data"
                </div>
            </div>
        )
    }
}