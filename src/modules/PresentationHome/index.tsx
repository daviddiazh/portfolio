/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { Navbar } from "@/components/Navbar";
import Avatar from '@/assets/images/ddh-img.png';
import styles from './styles.module.css';

export default function PresentationHome () {

  return (
    <div style={{height: '100vh', width: '100%'}}>
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
                  .typeString('de Medellin')
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
            <p className={styles.text1_description}><span className={styles.display_line}>Construyendo</span> productos de software con un gran <span className={styles.display_line}> impacto social.</span></p>
          </div>

          <div className={styles.text2_container}>
            <p className={styles.text2_description}>Desarrollador de Software FullStack. Especializado en Desarrollo Web y Móvil.</p>
          </div>

          <div className={styles.avatar_container} style={{paddingTop: 35}}>
            <button className={styles.button}>
              Conecta conmigo
            </button>
          </div>
        </div>


        <div className={styles.only_desktop}>
          <div className={styles.avatar_container}>
            <Image src={Avatar} alt="Avatar image" width={165} className={styles.avatar} />
          </div>

          {/* <p className={styles.hello}>Hey, soy David.</p> */}
          <p className={styles.hello}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hey, soy David')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('de Medellin')
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
            <p className={styles.text1_description}><span className={styles.display_line}>Construyendo</span> software de calidad con un gran <span className={styles.display_line}> impacto social.</span></p>
          </div>

          <div style={{width: 720, paddingTop: 35}}>
            <p style={{textAlign: 'center', fontSize: 20, fontWeight: 400, lineHeight: 1.6}}>Desarrollador de Software FullStack, especializado en Desarrollo Web y Móvil.</p>
          </div>

          <div className={styles.avatar_container} style={{paddingTop: 35}}>
            <button className={styles.button}>
              Conecta conmigo
            </button>
          </div>

          {/* <div style={{marginTop: 150, border: '0.1px solid rgba(255, 255, 255, 0.2)'}} />
          <a style={{color: '#fff', width: 25}} href=''><Image src={GitHub} alt="Avatar image" width={25} /></a> */}

        </div>
      </div>
    </div>
  )
}
