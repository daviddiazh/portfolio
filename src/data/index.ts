import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import webMeli from '../assets/mockups/web-mercadolibre.jpg';
import mobileMeli from '../assets/mockups/mobile-mercadolibre.jpg';
import mobileIg from '../assets/mockups/mobile-ig.jpg';
import artWork from '../assets/mockups/artwork.jpg';
import blackjack from '../assets/mockups/blackjack.jpg';
import selvatica from '../assets/mockups/selvatica.jpg';
import arrendamientosalvarez from '../assets/mockups/arrendamientosalvarez.jpg';

export const useData = () => {
    const { i18n } = useTranslation()
    
    const data = useMemo(() => ([
        {
            id: 0,
            name: i18n.t('mercadolibre.web.title', { ns: 'projects' }),
            description: i18n.t('mercadolibre.web.description', { ns: 'projects' }),
            link: 'https://challenge-ddh.vercel.app/',
            tags: ['React', 'CSS'],
            image: webMeli,
            repository: 'https://github.com/daviddiazh/clon-mercadolibre'
        },
        {
            id: 1,
            name: i18n.t('mercadolibre.mobile.title', { ns: 'projects' }),
            description: i18n.t('mercadolibre.mobile.description', { ns: 'projects' }),
            link: 'https://youtube.com/shorts/TJowF4wel2Q',
            tags: ['React Native'],
            image: mobileMeli,
            repository: 'https://github.com/daviddiazh/clone-mercadolibre-mobile'
        },
        {
            id: 2,
            name: i18n.t('instagram.mobile.title', { ns: 'projects' }),
            description: i18n.t('instagram.mobile.description', { ns: 'projects' }),
            link: 'https://youtube.com/shorts/GU-2TCRfkI0',
            tags: ['React Native'],
            image: mobileIg,
            repository: 'https://github.com/daviddiazh/clone-instagram-mobile'
        },
        {
            id: 3,
            name: i18n.t('artwork.title', { ns: 'projects' }),
            description: i18n.t('artwork.description', { ns: 'projects' }),
            link: 'https://artwork-page.vercel.app/',
            tags: ['Next.js', 'CSS'],
            image: artWork,
            repository: 'https://github.com/daviddiazh/artwork-page'
        },
        {
            id: 4,
            name: i18n.t('arrendamientos_alvarez.title', { ns: 'projects' }),
            description: i18n.t('arrendamientos_alvarez.description', { ns: 'projects' }),
            link: 'https://arrendamientosalvarez.com/',
            tags: ['React', 'CSS', 'Express'],
            image: arrendamientosalvarez,
            repository: 'https://github.com/daviddiazh/real-state-arral-fronted'
        },
        {
            id: 5,
            name: i18n.t('selvatica.title', { ns: 'projects' }),
            description: i18n.t('selvatica.description', { ns: 'projects' }),
            link: 'https://selvatica.vercel.app/',
            tags: ['React', 'CSS'],
            image: selvatica,
            repository: 'https://github.com/daviddiazh/coffee-ecommerce'
        },
        {
            id: 6,
            name: i18n.t('blackjack.title', { ns: 'projects' }),
            description: i18n.t('blackjack.description', { ns: 'projects' }),
            link: 'https://blackjack-ddh.vercel.app/',
            tags: ['HTML', 'CSS', 'JS'],
            image: blackjack,
            repository: 'https://github.com/daviddiazh/blackjack'
        },
    ]), [i18n.language])

    return data;
}