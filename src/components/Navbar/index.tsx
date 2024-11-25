import { useState } from 'react'
import { Link } from 'react-router-dom';
import openMenuIcon from '../../assets/icons/open-menu.svg';
import closeMenuIcon from '../../assets/icons/close-menu.svg';
import styles from './styles.module.css';
import { Locale } from '../Locale';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {

  const [ isOpenMenu, setOpenMenu ] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setOpenMenu(!isOpenMenu);

  return (
    <>
      <div className={styles.main_container}>
        <Link onClick={() => setOpenMenu(false)} to='/'><h1 className={styles.title}>David Diaz.</h1></Link>

        <div className={styles.links_container}>
          <Link className={styles.link} to='/'>{t('nav.home', { ns: 'header' })}</Link>
          <Link className={styles.link} to='/projects'>{t('nav.projects', { ns: 'header' })}</Link>
          <Link className={styles.link} to="https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/" target='_blank'>{t('nav.contact', { ns: 'header' })}</Link>
          <Locale />
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
              <Link onClick={toggleMenu} className={styles.link_mobile} to='/'>{t('nav.home', { ns: 'header' })}</Link>
              <Link onClick={toggleMenu} className={styles.link_mobile} to='/projects'>{t('nav.projects', { ns: 'header' })}</Link>
              <Link onClick={toggleMenu} className={styles.link_mobile} to="https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/" target='_blank'>{t('nav.contact', { ns: 'header' })}</Link>
            </div>
          ) : null
        }
      </div>
    </>
  )
}
