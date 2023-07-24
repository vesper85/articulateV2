import blogStyles from '../styles/Blog.module.css'
import Link from "next/link";
 

function AllPosts(props) {
  const {name, date, slug} = props.post;
  //console.log(props.post);
  return (
    <div className='m-5 h-12'>     
      <div className={blogStyles.blog_wrapper}>
        <p className={blogStyles.timestamp}> 
          Feb 28, 2022
        </p>
        <div className={blogStyles.blog_title}>
          {/*<MDXRemote {...title}/>*/}
          <Link href={`/posts/${slug}`} >{name}</Link>
        </div>
      </div>
    </div>
  )
}

export default AllPosts