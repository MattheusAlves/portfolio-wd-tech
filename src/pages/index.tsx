import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import Cellphone from '@/components/Cellphone'
import styles from '@/styles/home.module.scss'
import Typed from 'react-typed'

import {
  FaMobile,
  FaWrench,
  FaLockOpen,
  FaWhatsapp,
  FaBatteryFull
} from 'react-icons/fa'
const ROLES = [
  'WD Tech',
  'Android',
  'iPhone',
  'Assistência técnica',
  'Troca de display',
  'Troca de bateria',
  'Películas 3D'
]

function Home(): JSX.Element {
  return (
    <BaseLayout>
      <BasePage>
        <div className={styles['ap-container']}>
          <Cellphone />
          <div className={styles['ap-services']}>
            <div className={styles.background} />
            <img src="/images/section-1.jpg" className={styles['ap-img']} />
            <div className={styles['ap-services-wrapper']}>
              <span className={styles['ap-service']}>
                <FaMobile className={styles.icon} size={40} color="white" />
                <p className={styles['ap-service-title']}>
                  Aplicação de películas e capas protetoras
                </p>
              </span>
              <span className={styles['ap-service']}>
                <FaWrench className={styles.icon} size={40} color="white" />
                <p className={styles['ap-service-title']}>
                  Manutenção em smartphones
                </p>
              </span>
              <span className={styles['ap-service']}>
                <FaLockOpen className={styles.icon} size={40} color="white" />
                <p className={styles['ap-service-title']}>
                  Desbloqueio de S.O.
                </p>
              </span>
              <span className={styles['ap-service']}>
                <FaBatteryFull
                  className={styles.icon}
                  size={40}
                  color="white"
                />
                <p className={styles['ap-service-title']}>Troca de bateria</p>
              </span>
              <Typed
                strings={ROLES}
                typeSpeed={70}
                backSpeed={70}
                backDelay={1000}
                loopCount={0}
                showCursor
                className={styles['self-typed']}
                cursorChar="|"
                loop
              />
              <div className={styles['ap-service-contact']}>
                <p className={styles['ap-service-number']}>
                  <a
                  target="_blank"
                    href="https://api.whatsapp.com/send?text='Olá! Gostaria de um orçamento.'&phone=5519989568652">
                    <FaWhatsapp
                      className={styles['icon-wpp']}
                      size={40}
                      color="#4ac959"
                    />
                      (19)98956-8652</a>
                </p>
                <p className={styles['ap-service-title-contact']}>
                  Atendimento via Whatsapp
                </p>
              </div>
            </div>
          </div>
        </div>
      </BasePage>
    </BaseLayout >
  )
}

export default Home
