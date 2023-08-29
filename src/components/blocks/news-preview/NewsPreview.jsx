import styles from './news-preview.module.scss'
import { Text } from '@/common'
import { Block, BlockTop } from '@/common/block/Block'
import NewsCard from '@/components/cards/news-card/NewsCard'

const news = [
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

const NewsPreview = () => {
  return (
    <Block>
      <BlockTop title="Новини" linkText="Переглянути всі" link="/about" />
      <Text type="h3" className={styles.title} data-aos="fade-up">
        Дізнайтеся більше цікавої інформації
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
            data-aos-delay={100 * i}
          />
        ))}
      </div>
    </Block>
  )
}

export default NewsPreview
