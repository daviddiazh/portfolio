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
          {/* <a className={styles.link} onClick={() => navigate('/about')}>Sobre mi</a> */}
          <Link className={styles.link} href='/#about'>Sobre mi</Link>
          <Link className={styles.link} href='/#projects'>Proyectos</Link>
          <Link className={styles.link} href='/#contact'>Contácto</Link>
        </div>

        {
          isOpenMenu
          ? <Image src={closeMenuIcon} alt="Abrir menu, icono" className={styles.close_menu_icon} onClick={toggleMenu} />
          : <Image src={openMenuIcon} alt="Abrir menu, icono" className={styles.open_menu_icon} onClick={toggleMenu} />
        }
      </div>
      <div>
        {
          isOpenMenu
          ? (
            <div className={styles.links_container_mobile}>
              {/* <a className={styles.link} onClick={() => navigate('/about')}>Sobre mi</a> */}
              <Link className={styles.link_mobile} href='/#about'>Sobre mi</Link>
              <Link className={styles.link_mobile} href='/#projects'>Proyectos</Link>
              <Link className={styles.link_mobile} href='/#contact'>Contácto</Link>
            </div>
          ) : null
        }
      </div>
    </>
  )
}
