import styles from './styles.module.css';

import portadatest from '../../assets/mockups/test.jpg';
import portadatest2 from '../../assets/mockups/test2.jpg';

export default function Projects () {
  return (
    <div className={styles.main_container}>

      <h2 className={styles.title}>Proyectos</h2>
      <p>Estos son algunos de las aplicaciones móviles y web que he desarrollado...</p>

      <div className={styles['grid-container']}>
        <div className={styles.card}>
          <img src={portadatest} alt="" className={styles.image} width='100%' />
          <h4>Clon de Mercado Libre</h4>
          <p>Desarrollé una copia exacta de la página web de Mercado Libre, con el fin de poner en práctica mis conocimientos.</p>
        </div>

        <div className={styles.card}>
          <img src={portadatest2} alt="" className={styles.image} width='100%' />
          <h4>Clon de Mercado Libre</h4>
          <p>Desarrollé una copia exacta de la página web de Mercado Libre, con el fin de poner en práctica mis conocimientos.</p>
        </div>

        <div className={styles.card}>
          <img src={portadatest} alt="" className={styles.image} width='100%' />
          <h4>Clon de Mercado Libre</h4>
          <p>Desarrollé una copia exacta de la página web de Mercado Libre, con el fin de poner en práctica mis conocimientos.</p>
        </div>
        
        <div className={styles.card}>
          <img src={portadatest} alt="" className={styles.image} width='100%' />
          <h4>Clon de Mercado Libre</h4>
          <p>Desarrollé una copia exacta de la página web de Mercado Libre, con el fin de poner en práctica mis conocimientos.</p>
        </div>
      </div>
    </div>
  )
}