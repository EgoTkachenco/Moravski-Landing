'use client'
import styles from './about.module.scss'
import { Text, LinkWithIcon } from '@/common'
import { Block, BlockTop } from '@/common/block/Block'
import { useText } from '@/locales'
import routes from '@/utils/routes'
import CountUp from 'react-countup'

export const AboutChoir = ({ image = '/about.png' }) => {
  const t = useText()
  return (
    <>
      <div className={styles.content_row}>
        <div className={styles.f_column} data-aos="fade-up">
          <Text type="h3" className={styles.title}>
            {t('chamber-choir')} {t('moravski')}
          </Text>
          <Text type="h5" className={styles.subtitle}>
            {t('choir-about-title')}
          </Text>
          <LinkWithIcon href={routes['about-us']} isWhite>
            {t('read-more')}
          </LinkWithIcon>
        </div>
        <Text data-aos="fade-up" data-aos-delay="150">
          {t('choir-about-text')}
        </Text>
      </div>
      <div className={styles.content_bottom} data-aos="fade-up">
        <img src={image} alt="About Moravski" />
      </div>
    </>
  )
}

export const AboutChoirBlock = ({ image = '/about.png' }) => {
  const t = useText()
  return (
    <Block>
      <BlockTop title={t('about-us')} />
      <AboutChoir image={image} />
    </Block>
  )
}

export const AboutGroup = () => {
  const t = useText()
  return (
    <>
      <div className={styles.content_row} data-aos="fade-up">
        <Text type="h3" className={styles.title}>
          {t('more-about-group-title')}
        </Text>
      </div>
      <div className={styles.content_row}>
        <img
          src="/about-group.png"
          className={styles.illustration_group}
          alt="About Moravski"
          data-aos="fade-up"
          data-aos-delay="150"
        />

        <Text data-aos="fade-up" data-aos-delay="300">
          {t('more-about-group-text')}
        </Text>
      </div>
    </>
  )
}

export const AboutGroupBlock = () => {
  const t = useText()
  return (
    <Block>
      <BlockTop
        title={t('group')}
        linkText={t('more')}
        link={routes['about-us']}
      />
      <AboutGroup />
    </Block>
  )
}

export const AboutStatistic = () => {
  const t = useText()
  return (
    <div className={styles.stat_container} id="achievements">
      <StatItem title={t('statistic-choristers')} count={40} />
      <StatItem title={t('statistic-appearances')} count={50} />
      <StatItem title={t('statistic-tours')} count={5} />
      <StatItem title={t('statistic-projects')} count={3} />
    </div>
  )
}

const StatItem = ({ title, count }) => {
  return (
    <div className={styles.stat_item}>
      <div className={styles.stat_item_count}>
        <CountUp
          start={count > 100 ? count - 100 : 0}
          end={count}
          duration={5}
          enableScrollSpy
        />
        +
      </div>
      <Text>{title}</Text>
    </div>
  )
}

export const AboutStatisticBlock = () => {
  return (
    <Block>
      <AboutStatistic />
    </Block>
  )
}

export const AboutHistory = () => {
  const t = useText()
  return (
    <>
      <div className={styles.content_row} id="history">
        <div className={styles.f_column} data-aos="fade-up">
          <Text type="h3" className={styles.title}>
            {t('about-history')} {t('moravski')}
          </Text>
          <Text type="h5" className={styles.subtitle}>
            {t('about-history-title')}
          </Text>
          <LinkWithIcon href={routes['about-us']} isWhite>
            {t('read-more')}
          </LinkWithIcon>
        </div>
        <Text data-aos="fade-up" data-aos-delay="150">
          {t('about-history-text')}
        </Text>
      </div>
      <div className={styles.content_bottom} data-aos="fade-up">
        <img src="/about.png" alt="About Moravski" />
      </div>
    </>
  )
}

export const AboutHistoryBlock = () => {
  return (
    <Block>
      <AboutHistory />
    </Block>
  )
}

export const AboutOlena = () => {
  const t = useText()
  return (
    <div className={styles.content_row} id="olena">
      <div className={styles.text_container} data-aos="fade-up">
        <Text type="h3" className={styles.title}>
          {t('about-olena-title')}
        </Text>
        <Text>{t('about-olena-text')}</Text>
        <LinkWithIcon
          href={routes['about-us']}
          isWhite
          className={styles.text_container_bottom}
        >
          {t('read-more')}
        </LinkWithIcon>
      </div>

      <img
        src="/olena-radko.jpg"
        alt="Olena Radko"
        className={styles.illustration_olena}
        data-aos="fade-up"
        data-aos-delay="150"
      />
    </div>
  )
}

export const AboutOlenaBlock = () => {
  return (
    <Block>
      <AboutOlena />
    </Block>
  )
}
