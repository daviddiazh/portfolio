import { useState } from 'react'
import i18next from "i18next";
import co from '../../assets/images/co.jpg'
import us from '../../assets/images/us.jpg'
import styles from './styles.module.css'

export const Locale = () => {

  const [ lng, setLng ] = useState(localStorage.getItem('lng') || 'en');

  const handleLng = () => {
    setLng(prev => {
        if (prev === 'en') {
            changeLanguage('es')
            return 'es'
        }
        changeLanguage('en')
        return 'en'
    })
  }

  const changeLanguage = (lang: string) => {
    localStorage.setItem('lng', lang);
    i18next.changeLanguage(lang);
  };

  return (
    <div className={styles.container}>
        {
            lng === 'en' 
                ? <img src={us} alt="Bandera de USA" width={22} height={17} onClick={handleLng} />
                : <img src={co} alt="Bandera de Colombia" width={22} height={17} onClick={handleLng} />
        }
    </div>
  )
}
