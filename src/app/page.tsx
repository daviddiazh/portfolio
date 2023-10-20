'use client';

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  const navigate = () => {
    if (!document?.startViewTransition) {
      return router.push('/projects');
    }
    document?.startViewTransition(() => {
      router.push('/projects');
    })
  }

  return (
    <main className={styles.main}>
      {/* <Link href="/projects">Proyectos</Link> */}
      <p onClick={navigate}>
        Proyectos
      </p>
    </main>
  )
}
