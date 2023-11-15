import React from 'react'
import styles from './styles.module.css';
import { useViewTransitions } from '@/hooks/useViewTransitions';

export const Navbar = () => {

  const {navigate} = useViewTransitions();

  return (
    <div className={styles.main_container}>
      <h1 className={styles.title} onClick={() => navigate('/')}>David Diaz</h1>

      <div className={styles.links_container}>
        <a className={styles.link} onClick={() => navigate('/about')}>Sobre mi</a>
        <a className={styles.link} onClick={() => navigate('/projects')}>Proyectos</a>
        <a className={styles.link} onClick={() => navigate('/contact')}>Contácto</a>
      </div>
    </div>
  )
}
