import Navbar from '@/components/Navbar'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {createClient} from 'next-sanity'
import dynamic from 'next/dynamic'
const IntroModule = dynamic(()=> import('@/components/IntroModule'))
const Showcase  = dynamic(()=>import('@/components/Showcase'))

const client = createClient({
  projectId: "v3dbl7rx",
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: false
})

async function getPostData(){
  const data  = await client.fetch(`*[_type == "testblog"]`)
  return data;
}

export default async function Home() {
  const recentData = await getPostData();
  return (
    <main className={styles.outside_wrapper}>
      <div className={styles.inside_wrapper}>
        <IntroModule/>
        {/*<Loader show={true} />*/}
        <Showcase blogsFrontMatter={recentData} />
      </div>
    </main>
  )
}
