'use client'
import styles from './news.module.scss'
import { Text, PageBlock, Block, BlockTop } from '@/common'
import NewsCard from '@/components/cards/news-card/NewsCard'
import { useText } from '@/locales'
import routes from '@/utils/routes'

export const NewsDetails = ({ news }) => {
  return (
    <PageBlock title={news.title} breadcrumbs={['home', 'news', news.title]}>
      {news.description}
    </PageBlock>
  )
}

export const NewsPreviewBlock = ({ news = [] }) => {
  const t = useText()
  return (
    <Block>
      <BlockTop title={t('news')} linkText={t('see-all')} link={routes.news} />
      <Text type="h3" className={styles.preview_title} data-aos="fade-up">
        {t('news-more')}
      </Text>

      <div className={styles.preview_list}>
        {/* // no more than 3 elements */}
        {news.slice(0, 3).map((news, i) => (
          <NewsCard
            key={i}
            image={news.image}
            title={news.title}
            description={news.description}
            date={news.date}
            link={routes.news + '/' + news.id}
            data-aos="fade-up"
            data-aos-delay={100 * i}
          />
        ))}
      </div>
    </Block>
  )
}
