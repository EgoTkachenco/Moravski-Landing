'use client'
import { PageBlock, List } from '@/common'
import NewsCard from '@/components/cards/news-card/NewsCard'
import { useText } from '@/locales'
import { getNews } from '@/utils/api'
import routes from '@/utils/routes'

const News = ({ news }) => {
  const t = useText()
  return (
    <PageBlock title={t('news')} breadcrumbs={['home', 'news']}>
      <List
        service={getNews}
        renderItem={(news, i) => (
          <NewsCard
            key={i}
            image={news.image}
            title={news.title}
            description={news.description}
            date={news.date}
            link={routes.news + '/' + news.id}
            data-aos="fade-up"
            data-aos-delay={100 * (i % 3)}
          />
        )}
      />
    </PageBlock>
  )
}

export default News
