'use client'
import styles from './concerts.module.scss'
import { getConcerts } from '@/utils/api'
import { useState, useEffect } from 'react'
import ConcertCard from '@/components/cards/concert-card/ConcertCard'
import routes from '@/utils/routes'
import { Block, Text } from '@/common'
import { useText, useLang } from '@/locales'

const MoreConcerts = () => {
  const { lang } = useLang()
  const t = useText()
  const [concerts, setConcerts] = useState(null)

  useEffect(() => {
    getConcerts(1, lang === 'en').then((res) => {
      setConcerts(res.data.slice(0, 3))
    })
  }, [])

  if (!concerts) return null

  return (
    <Block>
      <Text className={styles.title} type="h3" data-aos="fade-up">
        {t('see-other-concerts')}
      </Text>
      <div className={styles.list}>
        {concerts.map((concert, i) => (
          <ConcertCard
            key={i}
            image={concert.image}
            title={concert.title}
            description={concert.description}
            date={concert.date}
            address={concert.address}
            link={routes.concerts + '/' + concert.slug}
            data-aos="fade-up"
            data-aos-delay={100 * (i % 3)}
          />
        ))}
      </div>
    </Block>
  )
}

export default MoreConcerts
