import { Text, Link } from '@/common'
import Image from 'next/image'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_left}>
          <Image src="/logo-white.svg" width={181} height={53} />
          <Text type="caption">© 2023 — Усі права захищені.</Text>
          <Link href="/policy" hideIcon>
            <Text type="caption">Політика конфіденціальності</Text>
          </Link>
          <div className={styles.footer_payment_methods}>
            <Image src="/mastercard.svg" width={50} height={50} />
            <Image src="/visa.svg" width={50} height={50} />
            <Image src="/liqpay.svg" width={72} height={15} />
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
            <div className={styles.links_title}>Контакти</div>
            <div className={styles.links_link}>+380 68 123 45 67</div>
            <div className={styles.links_link}>moravski.choir@gmail.com</div>
            <div className={styles.links_social}>
              <Image src="/icons/youtube.svg" width={26} height={27} />
              <Image src="/icons/facebook.svg" width={26} height={27} />
              <Image src="/icons/instagram.svg" width={26} height={27} />
              <Image src="/icons/tiktok.svg" width={26} height={27} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const links = [
  {
    title: 'Про нас',
    links: [
      { name: 'Історія хору', link: '/' },
      { name: 'Новини', link: '/' },
      { name: 'Колектив', link: '/' },
      { name: 'Художній керівник', link: '/' },
      { name: 'Досягнення', link: '/' },
    ],
  },
  {
    title: 'Виступи',
    links: [
      { name: 'Галерея', link: '/' },
      { name: 'Відео', link: '/' },
      { name: 'Концерти', link: '/' },
      { name: 'Записи', link: '/' },
    ],
  },
  {
    title: 'Інформація',
    links: [
      { name: 'Підтримати нас', link: '/' },
      { name: 'Контакти', link: '/' },
      { name: 'Оферта', link: '/' },
      { name: 'Доставка і оплата', link: '/' },
    ],
  },
]
