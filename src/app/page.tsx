'use client'

import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { Navbar } from "@/components/Navbar";
import Avatar from '@/assets/images/ddh-img.png';
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.main_container}>
        <div className={styles.only_mobile}>
          <div className={styles.avatar_container}>
            <Image src={Avatar} alt="Avatar image" width={165} className={styles.avatar} />
          </div>

          {/* <p className={styles.hello}>Hey, soy David</p> */}
          <p className={styles.hello}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hey, soy David')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('de Medellín')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Colombia')
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
            <p className={styles.text1_description}><span className={styles.display_line}>Construyendo</span> productos de software generando un gran <span className={styles.display_line}> impacto social.</span></p>
          </div>

          <div className={styles.text2_container}>
            <p className={styles.text2_description}>Desarrollador de Software FullStack autodidacta. Especializado en Desarrollo Web y Móvil.</p>
          </div>

          <div className={styles.buttonsContainer}>
            <Link href='/projects' className={styles.avatar_container}>
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
            <Image src={Avatar} alt="Avatar image" width={165} className={styles.avatar} />
          </div>

          <p className={styles.hello}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hey, soy David')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('de Medellín')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Colombia')
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
            <p className={styles.text1_description}><span className={styles.display_line}>Construyendo</span> software de calidad generando un gran <span className={styles.display_line}> impacto social.</span></p>
          </div>

          <div className={styles.text2_container}>
            <p className={styles.text2_description}>Desarrollador de Software FullStack autodidacta, especializado en Desarrollo Web y Móvil.</p>
          </div>

          <div className={styles.buttonsContainer}>
            <a href="https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/" target='_blank' className={styles.avatar_container}>
              <button className={styles['project-button']}>Conecta conmigo</button>
            </a>

            <Link href='/projects' className={styles.avatar_container}>
              <button className={styles['contact-button']}>
                Ver proyectos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
