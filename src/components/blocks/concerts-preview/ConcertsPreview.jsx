import styles from './concerts-preview.module.scss'
import { Text } from '@/common'
import { Block, BlockTop } from '@/common/block/Block'
import ConcertsCarousel from './ConcertsCarousel'

const ConcertsPreview = () => {
  return (
    <Block outerSlot={<ConcertsCarousel />}>
      <BlockTop title="Концерти" linkText="Переглянути всі" link="/about" />
      <Text type="h3" className={styles.title}>
        Перегляньте незабутні концерти, які вас зачарують
      </Text>
    </Block>
  )
}

export default ConcertsPreview
