import { useState } from 'react';
import ImageViewer from "react-simple-image-viewer";
import { projects } from '../../data';
import styles from './styles.module.css';
import github from '../../assets/icons/github.svg'
import link from '../../assets/icons/link.svg'
import close from '../../assets/icons/close-menu.svg'
import { Link } from 'react-router-dom';

export default function Projects () {

  const [photo, setPhoto] = useState('')

  const closeImageViewer = () => {
    setPhoto('');
  };

  return (
    <div className={styles.main_container}>

      <h2 className={styles.title}>Algunos proyectos <span style={{color: '#4282ad'}}> hechos por David</span></h2>
      {/* <h2 className={styles.title}>Algunos proyectos hechos por David</h2> */}
      <p className={styles.description}>Estos son algunos de las aplicaciones móviles y web que he desarrollado...</p>

      <div className={styles['grid-container']}>
        {
          projects.map(project => (
            <div className={styles.card} key={project.id}>
              <img src={project.image} alt={project.name} className={styles.image} width='100%' onClick={() => setPhoto(project.image)} />
              <div className={styles['content-card']}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h4 className={styles.name}>{project.name}</h4>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <Link to={project.repository} target='_blank'>
                      <img src={github} alt='GitHub icon' width={15} className={styles.icon} />
                    </Link>
                    <Link to={project.link} target='_blank'>
                      <img src={link} alt='Link icon' width={13} className={styles.icon} />
                    </Link>
                  </div>
                </div>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          ))
        }
      </div>

      {photo && (
        <ImageViewer
          src={[photo]}
          currentIndex={0}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  )
}
