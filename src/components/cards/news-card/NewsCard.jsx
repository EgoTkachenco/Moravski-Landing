import Image from 'next/image'
import Link from 'next/link'
import styles from './news-card.module.scss'

const NewsCard = ({ image, title, description, date, link, ...props }) => {
  return (
    <Link href={link} {...props}>
      <div className={styles.card}>
        <div className={styles.card_illustration}>
          <Image src={image} fill alt={title} />
        </div>
        <div className={styles.card_top}>
          <div className={styles.card_title}>{title}</div>
          <div className={styles.card_date}>{date}</div>
        </div>
        <div className={styles.card_description}>{description}</div>
      </div>
    </Link>
  )
}

export default NewsCard
