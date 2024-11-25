import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ImageViewer from "react-simple-image-viewer";
import { useData } from '../../data';
import github from '../../assets/icons/github.svg'
import link from '../../assets/icons/link.svg'
import styles from './styles.module.css';

export default function Projects () {

  const projects = useData();
  const { t } = useTranslation();
  const [photo, setPhoto] = useState('')

  const closeImageViewer = () => {
    setPhoto('');
  };

  return (
    <div className={styles.main_container}>

      <h2 className={styles.title}>{t('title.one', { ns: 'projects' })}<span style={{color: '#4282ad'}}>{t('title.two', { ns: 'projects' })}</span></h2>
      <p className={styles.description}>{t('description', { ns: 'projects' })}</p>

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
