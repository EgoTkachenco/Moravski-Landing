// import Image from 'next/image'
import styles from './concert-card-old.module.scss'
import { Text, Link } from '@/common'

const ConcertCard = ({ image, title, description, date, link, isLast }) => {
  return (
    <div
      className={`${styles.container} ${isLast ? styles.container_last : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.content_top}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date}</div>
        </div>
        <Text className={styles.description}>{description}</Text>

        <Link href={link} isWhite>
          Читати далі
        </Link>
      </div>
      <img className={styles.illustration} src={image} alt={title} />
    </div>
  )
}

export default ConcertCard
