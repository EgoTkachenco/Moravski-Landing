'use client'
import { LinkWithIcon, Text } from '@/common'
import { useText } from '@/locales'
import { getNews } from '@/utils/api'
import routes from '@/utils/routes'
import { useState, useEffect } from 'react'
import styles from './news.module.scss'

const MoreNews = () => {
  const t = useText()
  const [news, setNews] = useState([])

  useEffect(() => {
    getNews().then((res) => {
      setNews(res.data.slice(0, 3))
    })
  }, [])

  return (
    <div className={styles.more_news}>
      <Text type="h5" className={styles.more_news_title}>
        {t('news-other')}
      </Text>
      {news.map((news, i) => (
        <div key={i} className={styles.more_news_post}>
          <img
            className={styles.more_news_post_illustration}
            src={news.image}
            alt={news.title}
          />
          <div className={styles.more_news_post_title}>{news.title}</div>
          <LinkWithIcon href={routes.news + news.slug}>
            {t('read-next')}
          </LinkWithIcon>
        </div>
      ))}
    </div>
  )
}

export default MoreNews
