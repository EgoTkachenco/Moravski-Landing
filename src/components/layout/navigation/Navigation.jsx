'use client'
import Image from 'next/image'
import styles from './navigation.module.scss'
import { Button } from '@/common'
import { useIsTop } from '@/hooks'

const Navigation = () => {
  const isTop = useIsTop()

  return (
    <nav className={`${styles.nav} ${isTop ? '' : styles.nav_white}`}>
      <div className={styles.content}>
        <Image src="/logo.svg" width={165} height={48} alt="Moravski" />

        <ul className={styles.nav_links}>
          <li className={styles.nav_link}>Про нас</li>
          <li className={styles.nav_link}>Концерти</li>
          <li className={styles.nav_link}>Новини</li>
          <li className={styles.nav_link}>Контакти</li>
        </ul>

        <div className={styles.nav_right}>
          <div className={styles.nav_language}>UK</div>

          <Button color="yellow">Підтримати нас</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
