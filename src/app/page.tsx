'use client';

import { useViewTransitions } from '@/hooks/useViewTransitions';
import styles from './page.module.css'

export default function Home() {

  const {navigate} = useViewTransitions();

  return (
    <main className={styles.main}>
      <p onClick={() => navigate('/projects')}>
        Proyectos
      </p>
    </main>
  )
}
