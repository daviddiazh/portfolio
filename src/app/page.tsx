'use client';

import { useViewTransitions } from '@/hooks/useViewTransitions';
import PresentationHome from '@/modules/PresentationHome';
import styles from './page.module.css'

export default function Home() {

  const {navigate} = useViewTransitions();

  return (
    <main className={styles.main}>
      <PresentationHome />

      <p onClick={() => navigate('/projects')}>
        Proyectos
      </p>
    </main>
  )
}
