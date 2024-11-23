'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import openMenuIcon from '@/assets/icons/open-menu.svg';
import closeMenuIcon from '@/assets/icons/close-menu.svg';

export const Navbar = () => {

  const [ isOpenMenu, setOpenMenu ] = useState(false);

  const toggleMenu = () => setOpenMenu(!isOpenMenu);

  return (
    <>
      <div className={styles.main_container}>
        <Link href='/'><h1 className={styles.title}>David Diaz.</h1></Link>

        <div className={styles.links_container}>
          <Link className={styles.link} href='/'>Inicio</Link>
          <Link className={styles.link} href='/projects'>Proyectos</Link>
          <Link className={styles.link} href="https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/" target='_blank'>Contácto</Link>
        </div>

        {
          isOpenMenu
          ? <Image src={closeMenuIcon} alt="Cerrar menu, icono" className={styles.close_menu_icon} onClick={toggleMenu} />
          : <Image src={openMenuIcon} alt="Abrir menu, icono" className={styles.open_menu_icon} onClick={toggleMenu} />
        }
      </div>
      <div>
        {
          isOpenMenu
          ? (
            <div className={styles.links_container_mobile}>
              <Link className={styles.link_mobile} href='/'>Inicio</Link>
              <Link className={styles.link_mobile} href='/projects'>Proyectos</Link>
              <Link className={styles.link_mobile} href="https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/" target='_blank'>Contácto</Link>
            </div>
          ) : null
        }
      </div>
    </>
  )
}
