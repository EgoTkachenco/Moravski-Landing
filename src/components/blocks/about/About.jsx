'use client'
import styles from './about.module.scss'
import { Text, Link } from '@/common'
import Image from 'next/image'
import { Block, BlockTop } from '@/common/block/Block'
import { useText } from '@/locales'

const About = () => {
  const t = useText()
  return (
    <Block>
      <BlockTop title={t('about-us')} />
      <div className={styles.content_row}>
        <div data-aos="fade-up">
          <Text type="h3" className={styles.title}>
            {t('chamber-choir')} {t('moravski')}
          </Text>
          <Text type="h5" className={styles.subtitle}>
            Український аматорський хоровий колектив Центру художньої та
            технічної творчості «Печерськ» м. Київ.
          </Text>
          <Link href="/about" isWhite>
            {t('read-more')}
          </Link>
        </div>
        <Text data-aos="fade-up" data-aos-delay="150">
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
      <div className={styles.content_bottom} data-aos="fade-up">
        <Image src="/about.png" fill objectFit="contain" alt="About Moravski" />
      </div>
    </Block>
  )
}

export default About
