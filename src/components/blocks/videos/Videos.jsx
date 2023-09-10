import styles from './videos.module.scss'
import { Text, Breadcrumbs, Pagination } from '@/common'
import { Block } from '@/common/block/Block'
import Image from 'next/image'

let videos = [
  {
    image: '/news/news1.png',
    title: 'Участь у різдвяному Гала-концерті "United in Song "',
  },
  {
    image: '/news/news1.png',
    title: 'Участь у різдвяному Гала-концерті "United in Song "',
  },
  {
    image: '/news/news1.png',
    title: 'Участь у різдвяному Гала-концерті "United in Song "',
  },
  {
    image: '/news/news1.png',
    title: 'Участь у різдвяному Гала-концерті "United in Song "',
  },
  {
    image: '/news/news1.png',
    title: 'Участь у різдвяному Гала-концерті "United in Song "',
  },
  {
    image: '/news/news1.png',
    title: 'Участь у різдвяному Гала-концерті "United in Song "',
  },
]

videos = new Array(4).fill(videos).reduce((acc, el) => [...acc, ...el])

const Videos = () => {
  return (
    <Block innerClassName={styles.container}>
      <Breadcrumbs
        items={[
          { title: 'home', href: '/' },
          { title: 'videos', href: '/videos' },
        ]}
      />
      <Text type="h3" className={styles.title} data-aos="fade-up">
        Наші відео
      </Text>

      <div className={styles.list}>
        {videos.map((video, i) => (
          <div className={styles.list_item} key={i}>
            <Image src={video.image} fill />
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <Pagination page={1} total={10} />
      </div>
    </Block>
  )
}

export default Videos
