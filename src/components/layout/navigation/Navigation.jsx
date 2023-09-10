'use client'
import Image from 'next/image'
import styles from './navigation.module.scss'
import { Button } from '@/common'
import { useIsTop } from '@/hooks'
import { useState } from 'react'
import { useLang, useText } from '@/locales'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'about-us', href: '/about' },
  { name: 'concerts', href: '/concerts' },
  { name: 'news', href: '/news' },
  { name: 'contacts', href: '/contacts' },
]

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
        <Link href={lang === 'en' ? '/' + lang : '/'}>
          <Image src="/logo.svg" width={165} height={48} alt="Moravski" />
        </Link>

        <div
          className={`${styles.nav_content} ${
            open ? styles.nav_menu_opened : ''
          }`}
        >
          <ul className={styles.nav_links}>
            {links.map((link) => (
              <Link
                href={(lang === 'en' ? '/' + lang : '') + link.href}
                key={link.name}
              >
                <li className={styles.nav_link}>{t(link.name)}</li>
              </Link>
            ))}
          </ul>

          <div className={styles.nav_right}>
            <div className={styles.nav_language} onClick={toggleLang}>
              {lang}
            </div>

            <Button color="yellow">{t('support-us')}</Button>
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
