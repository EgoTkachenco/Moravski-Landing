'use client'
import styles from './styles.module.scss'
import { List, Block } from '@/common'
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
    <Block innerClassName={styles.list_page_container}>
      <List
        breadcrumbs={[
          { title: 'home', href: '/' },
          { title: 'videos', href: '/videos' },
        ]}
        data={videos}
        page={1}
        total={10}
        renderItem={(item) => (
          <div style={{ minHeight: '252px', position: 'relative' }}>
            <Image src={item.image} fill />
          </div>
        )}
      ></List>
    </Block>
  )
}

export default Videos
