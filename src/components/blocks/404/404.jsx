import styles from './404.module.scss'
import { Button } from '@/common'
import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src="/404.svg" alt="404" width={696} height={300} />
        <h1 className={styles.title}>Вибачте, сторінку не знайдено</h1>
        <Link href="/">
          <Button color="yellow">На головну</Button>
        </Link>
      </div>
    </header>
  )
}

export default NotFound
