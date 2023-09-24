'use client'
import ConcertCard from '../cards/concert-card/ConcertCard'
import { PageBlock, List } from '@/common'
import { useText } from '@/locales'
import routes from '@/utils/routes'

const Concerts = ({ concerts }) => {
  const t = useText()
  return (
    <PageBlock title={t('concerts')} breadcrumbs={['home', 'concerts']}>
      <List
        data={concerts}
        page={1}
        total={1}
        itemsPerRow={1}
        onPageChange={() => {}}
        renderItem={(concert, i) => (
          <ConcertCard
            key={i}
            image={concert.image}
            title={concert.title}
            description={concert.description}
            date={concert.date}
            link={routes.concerts + '/' + concert.id}
            data-aos="fade-up"
            data-aos-delay={100 * (i % 3)}
            isLast={i === concerts.length - 1}
          />
        )}
      />
    </PageBlock>
  )
}

export default Concerts
