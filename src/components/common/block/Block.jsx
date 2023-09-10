import styles from './block.module.scss'
import Link from '../link/Link'
import Text from '../text/Text'

export const Block = ({ children, outerSlot, innerClassName = '' }) => {
  return (
    <div className={styles.block}>
      <div className={`${styles.block_inner} ${innerClassName}`}>
        {children}
      </div>
      {outerSlot}
    </div>
  )
}

export const BlockTop = ({ title, linkText, link }) => {
  return (
    <div className={styles.block_top} data-aos="fade-up">
      <Text>{title}</Text>

      {link && (
        <Link href={link} isWhite>
          {linkText}
        </Link>
      )}
    </div>
  )
}
