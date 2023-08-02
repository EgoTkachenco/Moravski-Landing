import styles from './banner.module.scss'
import { Button, Link } from '@/common'

const Banner = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>КАМЕРНИЙ ХОР</h2>
        <h1 className={styles.title}>MORAVSKI</h1>
        <Button color="dark">Приєднатись до нас</Button>
        <Link className={styles.bottom} href="/">
          Підтримати нас
        </Link>
      </div>
    </header>
  )
}

export default Banner
