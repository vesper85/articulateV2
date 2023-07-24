
import { createClient } from "next-sanity"
import blogStyles from '@/styles/slug.module.css'

const client = createClient({
    projectId: "v3dbl7rx",
    dataset: "production",
    apiVersion: "v2021-10-21",
    useCdn: false
  })




async function fetchPost(slug){
    // const api = `https://v3dbl7rx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22testblog%22+%26%26+slug+%3D%3D%22${slug}%22%5D`
    // const data  = await fetch(api)
    console.log(typeof(slug));
    const data = await client.fetch(`*[_type == "testblog" && slug =="${slug}"]`)
    return data
}

export async function generateStaticParams(){
    const posts = await client.fetch(`*[_type == "testblog"]`)
    return(
        posts.map((post)=> ({slug:post.slug}))
    )
}

// const fetcher = (path) => fetch(`${path}`).then(res => res.json())


export default async function Post({ params }){
    const {slug} = params
    // console.log(api);
    const data = await fetchPost(slug)
    // console.log(post);
    // const {data, error, isloading} = useSWR(query,fetcher)
    console.log(data);
    const post = data[0]
    return (
        <div className={blogStyles.wrapper}>
      {/* <Head>
        <title>
          {matter.title}
        </title>
      </Head> */}
      <div className={blogStyles.innerWrapper}>

          <div className={blogStyles.heading_wrapper}>
            <h1 className="uppercase"> {post.name} </h1>
          </div>

          <div className={blogStyles.blog_info}>

              <div className={blogStyles.timestamp}>
                {post._createdAt}
              </div>

              <div className={blogStyles.other_info}>
                {/* <ViewCount slug={matter.slug} isblog={true} /> */}
                {/* {stats.text === '0 min read' ? '. 1 min read' : <span>{stats.text}</span>} */}
              </div>
          </div>
          <div className={blogStyles.blog_content}>
            {/* <MDXRemote {...mdxSource} components={components} />   */}
          </div>
         
          {/* <CommentBox/> */}
      </div>
    </div>
    )
} 

// const api = `https://v3dbl7rx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22testblog%22+%26%26+slug+%3D%3D%22${slugP}%22%5D`
