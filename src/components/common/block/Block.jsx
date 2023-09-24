import styles from './block.module.scss'
import { LinkWithIcon } from '../link/Link'
import Text from '../text/Text'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'

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
        <LinkWithIcon href={link} isWhite>
          {linkText}
        </LinkWithIcon>
      )}
    </div>
  )
}

export const PageBlock = ({ breadcrumbs, title, children }) => {
  return (
    <Block innerClassName={styles.page_block}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <Text type="h3" className={styles.page_block_title} data-aos="fade-up">
        {title}
      </Text>
      {children}
    </Block>
  )
}
