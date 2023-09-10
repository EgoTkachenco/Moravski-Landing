'use client'
import styles from './about-details.module.scss'
import { Text, Link, Breadcrumbs } from '@/common'
import Image from 'next/image'
import { Block, BlockTop } from '@/common/block/Block'
import { useText } from '@/locales'

const AboutDetails = () => {
  const t = useText()
  return (
    <Block innerClassName={styles.container}>
      <Breadcrumbs
        items={[
          { title: 'home', href: '/' },
          { title: 'about-us', href: '/about' },
        ]}
      />
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
        <Image
          src="/about2.png"
          fill
          objectFit="contain"
          alt="About Moravski"
        />
      </div>
    </Block>
  )
}

export default AboutDetails
