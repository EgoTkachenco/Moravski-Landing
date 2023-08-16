'use client'
import Image from 'next/image'
import styles from './navigation.module.scss'
import { Button } from '@/common'
import { useIsTop } from '@/hooks'
import { useState } from 'react'
import { useLang, useText } from '@/locales'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const isTop = useIsTop()
  const toggleMenu = () => setOpen(!open)
  const { lang, setLang } = useLang()
  const toggleLang = () => setLang(lang === 'ua' ? 'en' : 'ua')
  const t = useText()

  return (
    <nav className={`${styles.nav} ${isTop ? '' : styles.nav_white}`}>
      <div className={styles.nav_inner}>
        <Image src="/logo.svg" width={165} height={48} alt="Moravski" />

        <div
          className={`${styles.nav_content} ${
            open ? styles.nav_menu_opened : ''
          }`}
        >
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>{t('about-us')}</li>
            <li className={styles.nav_link}>{t('concerts')}</li>
            <li className={styles.nav_link}>{t('news')}</li>
            <li className={styles.nav_link}>{t('contacts')}</li>
          </ul>

          <div className={styles.nav_right}>
            <div className={styles.nav_language} onClick={toggleLang}>
              {lang}
            </div>

            <Button color="yellow">Підтримати нас</Button>
          </div>
        </div>

        <button
          className={`${styles.nav_btn} ${open ? styles.nav_btn_opened : ''}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
