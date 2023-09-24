'use client'
import { Text, Link } from '@/common'
import styles from './footer.module.scss'
import CONFIG from '@/config/config'
import routes from '@/utils/routes'
import { useText } from '@/locales'

const Footer = () => {
  const t = useText()
  const links = [
    {
      title: t('about-us'),
      links: [
        { name: t('choir-history'), link: routes['about-us'] + '#history' },
        { name: t('news'), link: routes.news },
        { name: t('group'), link: routes['about-us'] },
        { name: t('director'), link: routes['about-us'] + '#olena' },
        { name: t('achievements'), link: routes['about-us'] + '#achievements' },
      ],
    },
    {
      title: t('appearance'),
      links: [
        { name: t('gallery'), link: routes.gallery },
        { name: t('video'), link: routes.videos },
        { name: t('concerts'), link: routes.concerts },
      ],
    },
    {
      title: t('information'),
      links: [
        { name: t('support-us'), link: routes['support-us'] },
        { name: t('contacts'), link: routes.contacts },
      ],
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner} data-aos="fade-in">
        <div className={styles.footer_left}>
          <img
            src="/logo-white.svg"
            className={styles.footer_logo}
            alt="moravski"
          />
          <Text type="caption">© 2023 — {t('all-rights-reserved')}.</Text>
          <Link href={routes.policy}>
            <Text type="caption">{t('policy')}</Text>
          </Link>
          <div className={styles.footer_payment_methods}>
            <img
              src="/mastercard.svg"
              width="50px"
              height="50px"
              alt="mastercard"
            />
            <img src="/visa.svg" width="50px" height="50px" alt="visa" />
            <img src="/liqpay.svg" width="72px" height="15px" alt="liqpay" />
          </div>
        </div>

        <div className={styles.links}>
          {links.map((block, i) => (
            <div className={styles.links_column} key={i}>
              <div className={styles.links_title}>{block.title}</div>
              {block.links.map((link, j) => (
                <Link href={link.link} className={styles.links_link} key={j}>
                  {link.name}
                </Link>
              ))}
            </div>
          ))}

          <div className={styles.links_column}>
            <div className={styles.links_title}>{t('contacts')}</div>
            <div className={styles.links_link}>{CONFIG.contact_phone}</div>
            <div className={styles.links_link}>{CONFIG.contact_mail}</div>
            <div className={styles.links_social}>
              <Link external href={CONFIG.social_accounts.youtube}>
                <img
                  src="/icons/youtube.svg"
                  className={styles.links_social_icon}
                  alt="youtube"
                />
              </Link>
              <Link external href={CONFIG.social_accounts.facebook}>
                <img
                  src="/icons/facebook.svg"
                  className={styles.links_social_icon}
                  alt="facebook"
                />
              </Link>
              <Link external href={CONFIG.social_accounts.instagram}>
                <img
                  src="/icons/instagram.svg"
                  className={styles.links_social_icon}
                  alt="instagram"
                />
              </Link>
              <Link external href={CONFIG.social_accounts.tiktok}>
                <img
                  src="/icons/tiktok.svg"
                  className={styles.links_social_icon}
                  alt="tiktok"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
