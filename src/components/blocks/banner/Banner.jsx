'use client'
import styles from './banner.module.scss'
import { Button, Link } from '@/common'
import { useText } from '@/locales'

const Banner = () => {
  const t = useText()

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.subtitle} data-aos="fade-up">
          {t('chamber-choir')}
        </h2>
        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="150">
          {t('moravski')}
        </h1>
        <Button color="dark" data-aos="fade-up" data-aos-delay="300">
          {t('join-us')}
        </Button>
        <Link
          className={styles.bottom}
          href="/"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          {t('support-us')}
        </Link>
      </div>
    </header>
  )
}

export default Banner
