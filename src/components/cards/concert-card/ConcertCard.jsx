'use client'
import styles from './concert-card.module.scss'
import { Text, Link, Button } from '@/common'

import { useLang, useText } from '@/locales'
import { formatDate } from '@/utils/functions'

const ConcertCard = ({ image, title, date, address, link, ...props }) => {
  const { lang } = useLang()
  const t = useText()

  let formated_date = ''
  if (date) formated_date = formatDate(date, lang)

  return (
    <div className={styles.container} {...props}>
      <img className={styles.illustration} src={image} alt={title} />
      <div className={styles.title}>{title}</div>
      <Text className={styles.subtitle}>
        {formated_date} <br /> {address}
      </Text>

      <Link href={link}>
        <Button color="yellow">{t('see')}</Button>
      </Link>
    </div>
  )
}

export default ConcertCard
