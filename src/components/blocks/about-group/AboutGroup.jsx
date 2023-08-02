'use client'
import styles from './about-group.module.scss'
import { Text, Link } from '@/common'
import Image from 'next/image'
import { Block, BlockTop } from '@/common/block/Block'

const AboutGroup = () => {
  return (
    <Block>
      <BlockTop title="Колектив" linkText="Детальніше" link="/about" />

      <div className={styles.content_row}>
        <Text type="h3" className={styles.title}>
          Дізнайтеся більше інформації про колектив
        </Text>
      </div>
      <div className={styles.content_row}>
        <Image
          src="/about-group.png"
          width={594}
          height={383}
          alt="About Moravski"
        />

        <Text>
          Камерний хор «Moravski» названо на честь видатного українського
          хорового диригента та педагога Павла Муравського (1914-2014).
          <br />
          <br />
          <br />
          Щоб відновити історичну справедливість, колектив обрав назву
          «Moravski», адже справжнє прізвище Павла Івановича – Моравський.
          Камерний хор «Moravski» названо на честь видатного українського
          хорового диригента та педагога Павла Муравського (1914-2014).
        </Text>
      </div>
      <div className={styles.stat_container}>
        <StatItem title="хористів" count={20} />
        <StatItem title="виступів" count={1000} />
        <StatItem title="гастролей" count={50} />
        <StatItem title="міжнародних проєктів" count={25} />
      </div>
      <div className={styles.content_row}>
        <div className={styles.text_container}>
          <Text type="h2">
            Олена Радько — головний диригент і художній керівник хору
          </Text>
          <Text>
            Камерний хор «Moravski» названо на честь видатного українського
            хорового диригента та педагога Павла Муравського (1914-2014).
            <br />
            <br />
            <br />
            Щоб відновити історичну справедливість, колектив обрав назву
            «Moravski», адже справжнє прізвище Павла Івановича – Моравський.
            Камерний хор «Moravski» названо на честь видатного українського
            хорового диригента та педагога Павла Муравського (1914-2014).
          </Text>
          <Link href="/about" isWhite className={styles.text_container_bottom}>
            Детальніше
          </Link>
        </div>

        <div className={styles.illustration_2}>
          <Image src="/olena-radko.jpg" fill alt="Olena Radko" />
        </div>
      </div>
    </Block>
  )
}

export default AboutGroup

const StatItem = ({ title, count }) => {
  return (
    <div className={styles.stat_item}>
      <div className={styles.stat_item_count}>{count}+</div>
      <Text>{title}</Text>
    </div>
  )
}