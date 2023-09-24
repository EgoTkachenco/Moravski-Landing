'use client'
import styles from './404.module.scss'
import { Button } from '@/common'
import Link from 'next/link'
import routes from '@/utils/routes'
import { useText } from '@/locales'

const NotFound = () => {
  const t = useText()
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/404.svg" alt="404" className={styles.illustration} />
        <h1 className={styles.title}>{t('404_title')}</h1>
        <Link href={routes.home}>
          <Button color="yellow">{t('404_redirect')}</Button>
        </Link>
      </div>
    </header>
  )
}

export default NotFound
