import { useState } from 'react'
import { Link } from 'react-router-dom';
import openMenuIcon from '../../assets/icons/open-menu.svg';
import closeMenuIcon from '../../assets/icons/close-menu.svg';
import styles from './styles.module.css';

export const Navbar = () => {

  const [ isOpenMenu, setOpenMenu ] = useState(false);

  const toggleMenu = () => setOpenMenu(!isOpenMenu);

  return (
    <>
      <div className={styles.main_container}>
        <Link to='/'><h1 className={styles.title}>David Diaz.</h1></Link>

        <div className={styles.links_container}>
          <Link className={styles.link} to='/'>Inicio</Link>
          <Link className={styles.link} to='/projects'>Proyectos</Link>
          <Link className={styles.link} to="https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/" target='_blank'>Contácto</Link>
        </div>

        {
          isOpenMenu
          ? <img src={closeMenuIcon} alt="Cerrar menu, icono" className={styles.close_menu_icon} onClick={toggleMenu} />
          : <img src={openMenuIcon} alt="Abrir menu, icono" className={styles.open_menu_icon} onClick={toggleMenu} />
        }
      </div>
      <div>
        {
          isOpenMenu
          ? (
            <div className={styles.links_container_mobile}>
              <Link onClick={toggleMenu} className={styles.link_mobile} to='/'>Inicio</Link>
              <Link onClick={toggleMenu} className={styles.link_mobile} to='/projects'>Proyectos</Link>
              <Link onClick={toggleMenu} className={styles.link_mobile} to="https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/" target='_blank'>Contácto</Link>
            </div>
          ) : null
        }
      </div>
    </>
  )
}
