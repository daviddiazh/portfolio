'use client';

import PresentationHome from '@/modules/PresentationHome';
import styles from './page.module.css'
import { Projects } from '@/modules/Projects';

export default function Home() {

  return (
    <main className={styles.main}>

      <PresentationHome />

      {/* <Projects /> */}
      
    </main>
  )
}
