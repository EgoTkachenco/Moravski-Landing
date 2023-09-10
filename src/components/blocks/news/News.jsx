import styles from './news.module.scss'
import { Text, Breadcrumbs, Pagination } from '@/common'
import { Block } from '@/common/block/Block'
import NewsCard from '@/components/cards/news-card/NewsCard'

let news = [
  {
    image: '/news/news1.png',
    title: 'Участь у різдвяному Гала-концерті "United in Song "',
    description:
      'Одразу після заключного концерту гості перемістилися до готелю Avenue of the Arts, щоб провести веселий вечір, підтримуючи європейський тур Pacific Chorale та відзначені нагородами освітні...',
    date: '25.10.2021',
    link: '/news/1',
  },
  {
    image: '/news/news1.png',
    title: 'Участь у різдвяному Гала-концерті "United in Song "',
    description:
      'Одразу після заключного концерту гості перемістилися до готелю Avenue of the Arts, щоб провести веселий вечір, підтримуючи європейський тур Pacific Chorale та відзначені нагородами освітні...',
    date: '25.10.2021',
    link: '/news/1',
  },
  {
    image: '/news/news1.png',
    title: 'Участь у різдвяному Гала-концерті "United in Song "',
    description:
      'Одразу після заключного концерту гості перемістилися до готелю Avenue of the Arts, щоб провести веселий вечір, підтримуючи європейський тур Pacific Chorale та відзначені нагородами освітні...',
    date: '25.10.2021',
    link: '/news/1',
  },
]

news = new Array(4).fill(news).reduce((acc, el) => [...acc, ...el])

const News = () => {
  return (
    <Block innerClassName={styles.container}>
      <Breadcrumbs
        items={[
          { title: 'home', href: '/' },
          { title: 'news', href: '/news' },
        ]}
      />
      <Text type="h3" className={styles.title} data-aos="fade-up">
        Новини
      </Text>
      <div className={styles.list}>
        {news.map((news, i) => (
          <NewsCard
            key={i}
            image={news.image}
            title={news.title}
            description={news.description}
            date={news.date}
            link={news.link}
            data-aos="fade-up"
            data-aos-delay={100 * (i % 3)}
          />
        ))}
      </div>

      <div className={styles.pagination}>
        <Pagination page={1} total={10} />
      </div>
    </Block>
  )
}

export default News
