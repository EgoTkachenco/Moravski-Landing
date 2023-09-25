'use client'
import styles from './navigation.module.scss'
import { Button, Link } from '@/common'
import { useIsTop } from '@/hooks'
import { useState } from 'react'
import { useLang, useText } from '@/locales'
import { usePathname } from 'next/navigation'
import routes from '@/utils/routes'

const links = ['about-us', 'concerts', 'news', 'contacts']

const Navigation = () => {
  const pathname = usePathname()
  const isAnimation = ['/', '/en', '/ua'].includes(pathname)
  const isTop = useIsTop(isAnimation)
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)
  const { lang, setLang } = useLang()
  const toggleLang = () => setLang(lang === 'ua' ? 'en' : 'ua')
  const t = useText()

  return (
    <nav className={`${styles.nav} ${isTop ? '' : styles.nav_white}`}>
      <div className={styles.nav_inner}>
        <Link href={routes.home}>
          <img src="/logo.svg" className={styles.nav_logo} alt="Moravski" />
        </Link>

        <div
          className={`${styles.nav_content} ${
            open ? styles.nav_menu_opened : ''
          }`}
        >
          <ul className={styles.nav_links}>
            {links.map((link) => (
              <Link href={routes[link]} key={link} onClick={toggleMenu}>
                <li className={styles.nav_link}>{t(link)}</li>
              </Link>
            ))}
          </ul>

          <div className={styles.nav_right}>
            <div className={styles.nav_language} onClick={toggleLang}>
              {lang}
            </div>

            <Link href={routes['support-us']}>
              <Button color="yellow">{t('support-us')}</Button>
            </Link>
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
