'use client'
import styles from './concerts.module.scss'
import { Text } from '@/common'
import { Block, BlockTop } from '@/common/block/Block'
import ConcertsCarousel from './ConcertsCarousel'
import routes from '@/utils/routes'
import { useText } from '@/locales'

const ConcertsPreview = ({ concerts }) => {
  const t = useText()
  return (
    <Block outerSlot={<ConcertsCarousel concerts={concerts} />}>
      <BlockTop
        title={t('concerts')}
        linkText={t('see-all')}
        link={routes.concerts}
      />
      <Text type="h3" className={styles.title} data-aos="fade-up">
        {t('see-concerts-title')}
      </Text>
    </Block>
  )
}

export default ConcertsPreview
