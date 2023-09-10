import styles from './concerts.module.scss'
import { Text, Breadcrumbs, Pagination } from '@/common'
import { Block } from '@/common/block/Block'

let concerts = [
  {
    image: '/news/news1.png',
    title: 'Концерт у Лютеранській кірсі Києва"',
    description: `На наш Ювілейний концерт камерного хору "Moravski"  ми підготували два відділення, бо, крім української музики, хотіли познайомити наших глядачів з яскравими зразками західноєвропейської музики. 

			Нам дуже приємно, що вам відгукнулися обрані нами твори. Ваші гучні оплески та вигуки "Браво" це підтверджували!
			
			Ми вибудовували нашу програму так, аби глядачі і колорит українського села відчули, і міць наших Карпат, і навіть на весіллі з танцями побували, і в ліс разом з нами сходили прямо під час концерту. Звісно ж всі звуки лісу й птахів відтворили наші хористи. Ніяких фонограм!`,
    date: '30 червня 2023',
    link: '/news/1',
  },
]

const Concerts = () => {
  return (
    <Block innerClassName={styles.container}>
      <Breadcrumbs
        items={[
          { title: 'home', href: '/' },
          { title: 'concerts', href: '/concerts' },
        ]}
      />
      <Text type="h3" className={styles.title} data-aos="fade-up">
        Концерти
      </Text>
      {/* <div className={styles.list}>
        {concerts.map((news, i) => (
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
      </div> */}

      <div className={styles.pagination}>
        <Pagination page={1} total={10} />
      </div>
    </Block>
  )
}

export default Concerts
