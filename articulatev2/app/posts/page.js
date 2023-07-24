
import { createClient } from "next-sanity"
import postStyles from '@/styles/Blog.module.css'
import dynamic from "next/dynamic"
const PostIntro = dynamic(()=> import('@/components/PostIntro'))
const DisplayPost = dynamic(()=>import('@/components/DisplayPost'))

const client = createClient({
    projectId: "v3dbl7rx",
    dataset: "production",
    apiVersion: "v2021-10-21",
    useCdn: false
  })

async function fetchPosts(){
    const posts = await client.fetch(`*[_type == "testblog"]`)
    return posts
}

// Add head to the site

export default async function Posts (){

    const postsArray = await fetchPosts();
    return(
        <main className='h-screen flex flex-col items-center sm:px-4 md:px-[2rem] dark:text-white'>
           <div className={postStyles.inside_wrapper}>
               <PostIntro/>
               {/* <SearchBlog searchedString={searchedString} setsearchedString={setsearchedString}  count={blogsArray.length} /> */}
               <p className=" text-2xl md:text-[2rem] m-5 leading-6 mt-10 text-theme-page-text-heading mb-10">All Posts</p>
               {
                   postsArray.map((post)=>{
                       return (
                            <DisplayPost key={post.date} post={post} />
                       )
                   })
               }
               
           </div>
        </main>
    )
}