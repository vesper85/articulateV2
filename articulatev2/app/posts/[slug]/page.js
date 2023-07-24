'use client'
import { createClient } from "next-sanity"
import { usePathname } from 'next/navigation' 
import useSWR from 'swr'

const client = createClient({
    projectId: "v3dbl7rx",
    dataset: "production",
    apiVersion: "v2021-10-21",
    useCdn: false
  })

const fetcher = async(...args) =>{
    const {slugP} = args
    const data = await client.fetch(`*[_type == "testblog"] && slug == ${slugP}`)
    return data

}



async function fetchPost(){
    const path = usePathname();
    const slugP = path.split('/')[2]
    console.log(slugP)
    // const post = await client.fetch(`*[_type == "testblog" && slug == ${slugP}]`)
    const api = `https://v3dbl7rx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22testblog%22+%26%26+slug+%3D%3D%22${slugP}%22%5D`
    const {data, error} = useSWR(slugP,{cache: true})
    return data
}


export default async function Post(){
    
    const data = await fetchPost();
    return(
        <div>
            {data.name}
        </div>
    )

}