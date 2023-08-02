import styles from './news-preview.module.scss'
import { Text } from '@/common'
import { Block, BlockTop } from '@/common/block/Block'
import NewsCard from '@/components/cards/news-card/NewsCard'

const NewsPreview = () => {
  return (
    <Block>
      <BlockTop title="Новини" linkText="Переглянути всі" link="/about" />
      <Text type="h3" className={styles.title}>
        Дізнайтеся більше цікавої інформації
      </Text>

      <div className={styles.list}>
        <NewsCard
          image="/news/news1.png"
          title={'Участь у різдвяному Гала-концерті "United in Song "'}
          description="Одразу після заключного концерту гості перемістилися до готелю Avenue of the Arts, щоб провести веселий вечір, підтримуючи європейський тур Pacific Chorale та відзначені нагородами освітні..."
          date="25.10.2021"
        />
        <NewsCard
          image="/news/news1.png"
          title={'Участь у різдвяному Гала-концерті "United in Song "'}
          description="Одразу після заключного концерту гості перемістилися до готелю Avenue of the Arts, щоб провести веселий вечір, підтримуючи європейський тур Pacific Chorale та відзначені нагородами освітні..."
          date="25.10.2021"
        />
        <NewsCard
          image="/news/news1.png"
          title={'Участь у різдвяному Гала-концерті "United in Song "'}
          description="Одразу після заключного концерту гості перемістилися до готелю Avenue of the Arts, щоб провести веселий вечір, підтримуючи європейський тур Pacific Chorale та відзначені нагородами освітні..."
          date="25.10.2021"
        />
      </div>
    </Block>
  )
}

export default NewsPreview
