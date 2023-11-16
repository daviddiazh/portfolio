import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';

export const Navbar = () => {

  return (
    <div className={styles.main_container}>
      <Link href='/'><h1 className={styles.title}>David Diaz.</h1></Link>

      <div className={styles.links_container}>
        {/* <a className={styles.link} onClick={() => navigate('/about')}>Sobre mi</a> */}
        <Link className={styles.link} href='/#about'>Sobre mi</Link>
        <Link className={styles.link} href='/#projects'>Proyectos</Link>
        <Link className={styles.link} href='/#contact'>Contácto</Link>
      </div>
    </div>
  )
}
