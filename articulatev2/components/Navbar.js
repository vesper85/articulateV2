
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Navbar () {
    return(
        <nav className={styles.navbar} >
            <div className="grow min-w-[12rem] z-50">
                    {/* no space allowed between 'link' and 'a' tag */}
                    <Link className={styles.nav_link} href="/">Home</Link>
                    <Link className={styles.nav_link} href='/posts'>Posts</Link>
                    <Link className={styles.nav_link} href='/aboutme'>Me</Link>

            </div>
            {/* <DarkModeSwitch/> */}
        </nav>
    )
}