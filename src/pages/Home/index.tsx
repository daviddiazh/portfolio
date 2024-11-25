import Typewriter from 'typewriter-effect';
import Avatar from '../../assets/images/ddh-img.png';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Home() {

  const { t, i18n } = useTranslation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const onLanguageChange = () => setKey((prev) => prev + 1);
    i18n.on('languageChanged', onLanguageChange);
    return () => {
      i18n.off('languageChanged', onLanguageChange);
    };
  }, [i18n]);

  return (
    <main className={styles.main}>

      <div className={styles.main_container}>
        <div className={styles.only_mobile}>
          <div className={styles.avatar_container}>
            <img src={Avatar} alt="Avatar image" width={165} className={styles.avatar} />
          </div>

          <p className={styles.hello}>
            <Typewriter
              key={key}
              onInit={(typewriter) => {
                typewriter.typeString(t('Typewriter.one', { ns: 'home' }))
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(t('Typewriter.two', { ns: 'home' }))
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              component='span'
              options={{
                loop: true,
              }}
            />
          </p>
          <div className={styles.text1_container}>
            <p className={styles.text1_description}><span className={styles.display_line}>{t('mainText.building', { ns: 'home' })}</span>{t('mainText.complement', { ns: 'home' })}<span className={styles.display_line}>{t('mainText.socialImpact', { ns: 'home' })}</span></p>
          </div>

          <div className={styles.text2_container}>
            <p className={styles.text2_description}>{t('secondText', { ns: 'home' })}</p>
          </div>

          <div className={styles.buttonsContainer}>
            <Link to='/projects' className={styles.avatar_container}>
              <button className={styles['contact-button']}>
                Ver proyectos
              </button>
            </Link>

            <a href="https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/" target='_blank' className={styles.avatar_container}>
              <button className={styles['project-button']}>Conecta conmigo</button>
            </a>
          </div>
        </div>


        <div className={styles.only_desktop}>
          <div className={styles.avatar_container}>
            <img src={Avatar} alt="Avatar image" width={165} className={styles.avatar} />
          </div>

          <p className={styles.hello}>
            <Typewriter
              key={key}
              onInit={(typewriter) => {
                typewriter.typeString(t('Typewriter.one', { ns: 'home' }))
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(t('Typewriter.two', { ns: 'home' }))
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              component='span'
              options={{
                loop: true,
              }}
            />
          </p>
          <div className={styles.text1_container}>
            <p className={styles.text1_description}><span className={styles.display_line}>{t('mainText.building', { ns: 'home' })}</span>{t('mainText.complement', { ns: 'home' })}<span className={styles.display_line}>{t('mainText.socialImpact', { ns: 'home' })}</span></p>
          </div>

          <div className={styles.text2_container}>
            <p className={styles.text2_description}>{t('secondText', { ns: 'home' })}</p>
          </div>

          <div className={styles.buttonsContainer}>
            <a href="https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/" target='_blank' className={styles.avatar_container}>
              <button className={styles['project-button']}>{t('connectWithMe', { ns: 'home' })}</button>
            </a>

            <Link to='/projects' className={styles.avatar_container}>
              <button className={styles['contact-button']}>
              {t('seeProjects', { ns: 'home' })}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
