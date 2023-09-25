'use client'
import styles from './banner.module.scss'
import { Button, LinkWithIcon } from '@/common'
import { useText } from '@/locales'
import routes from '@/utils/routes'

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
        <div data-aos="fade-up" data-aos-delay="300">
          <Button color="dark">{t('join-us')}</Button>
        </div>
        <LinkWithIcon
          className={styles.bottom}
          href={routes['support-us']}
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-anchor-placement="bottom"
        >
          {t('support-us')}
        </LinkWithIcon>
      </div>
    </header>
  )
}

export default Banner
