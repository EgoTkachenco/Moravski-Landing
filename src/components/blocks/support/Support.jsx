import styles from './support.module.scss'
import { Text, Button } from '@/common'
import Image from 'next/image'
import { Block } from '@/common/block/Block'

const News = () => {
  return (
    <Block>
      <div className={styles.support_card}>
        <Text type="h3" className={styles.support_card_title}>
          Виразіть свою підтримку онлайн - ваш внесок має значення для нас!
        </Text>
        <div className={styles.support_card_buttons}>
          <Button color="yellow">Підтримайте нас</Button>
          <Button color="red">
            <Image src="/icons/patreon.svg" width={15} height={14} alt="UA" />
            Patreon
          </Button>
          <Button>
            <Image src="/icons/ua.svg" width={20} height={20} alt="UA" />
            Support Ukraine
          </Button>
        </div>
      </div>
    </Block>
  )
}

export default News
