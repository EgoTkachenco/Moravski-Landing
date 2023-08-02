import styles from './about.module.scss'
import { Text, Link } from '@/common'
import Image from 'next/image'
import { Block, BlockTop } from '@/common/block/Block'

const About = () => {
  return (
    <Block>
      <BlockTop title="Про нас" />
      <div className={styles.content_row}>
        <div>
          <Text type="h3" className={styles.title}>
            Камерний хор Moravski
          </Text>
          <Text type="h5" className={styles.subtitle}>
            Український аматорський хоровий колектив Центру художньої та
            технічної творчості «Печерськ» м. Київ.
          </Text>
          <Link href="/about" isWhite>
            Читати більше
          </Link>
        </div>
        <Text>
          Колектив створений у вересні 2017 року за ініціативи заслуженої діячки
          мистецтв України, хорової диригентки Лариси Бухонської.
          <br />
          <br />
          <br />
          Незмінним керівником хору є Олена Радько, випускниця Національної
          музичної академії України ім. П. І. Чайковського (клас диригування –
          проф., нар. арт. Укр. Л. М. Венедиктова), лауреат міжнародних
          конкурсів, засновник та керівник Камерного хору «Покров» (з 2002 до
          2019 рр.).Колектив створений у вересні 2017 року за ініціативи
          заслуженої діячки мистецтв України, хорової диригентки Лариси
          Бухонської.
        </Text>
      </div>
      <div className={styles.content_bottom}>
        <Image src="/about.png" fill objectFit="contain" alt="About Moravski" />
      </div>
    </Block>
  )
}

export default About
