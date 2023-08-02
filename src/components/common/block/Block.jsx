import styles from './block.module.scss'
import { Link, Text } from '@/common'

export const Block = ({ children, outerSlot }) => {
  return (
    <div className={styles.block}>
      <div className={styles.block_inner}>{children}</div>
      {outerSlot}
    </div>
  )
}

export const BlockTop = ({ title, linkText, link }) => {
  return (
    <div className={styles.block_top}>
      <Text>{title}</Text>

      {link && (
        <Link href={link} isWhite>
          {linkText}
        </Link>
      )}
    </div>
  )
}
