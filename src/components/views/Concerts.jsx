'use client'
import ConcertCard from '@/components/cards/concert-card/ConcertCard'
import { PageBlock, List } from '@/common'
import { useText } from '@/locales'
import routes from '@/utils/routes'
import { getConcerts } from '@/utils/api'

const Concerts = () => {
  const t = useText()
  return (
    <PageBlock title={t('concerts')} breadcrumbs={['home', 'concerts']}>
      <List
        service={getConcerts}
        renderItem={(concert, i) => (
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
        )}
      />
    </PageBlock>
  )
}

export default Concerts
