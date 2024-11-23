import { projects } from '../../data';
import styles from './styles.module.css';

export default function Projects () {
  return (
    <div className={styles.main_container}>

      <h2 className={styles.title}>Algunos proyectos <span style={{color: '#4282ad'}}> hechos por David</span></h2>
      {/* <h2 className={styles.title}>Algunos proyectos hechos por David</h2> */}
      <p className={styles.description}>Estos son algunos de las aplicaciones móviles y web que he desarrollado...</p>

      <div className={styles['grid-container']}>
        {
          projects.map(project => (
            <div className={styles.card} key={project.id}>
              <img src={project.image} alt={project.name} className={styles.image} width='100%' />
              <div className={styles['content-card']}>
                <h4 className={styles.name}>{project.name}</h4>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
