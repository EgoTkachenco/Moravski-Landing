'use client'
import styles from './breadcrumbs.module.scss'
import Text from '../text/Text'
import { useText } from '@/locales'
import Link from 'next/link'
import { Fragment } from 'react'
import routes from '@/utils/routes'

const Breadcrumbs = ({ items }) => {
  const t = useText()
  return (
    <div className={styles.breadcrumbs}>
      {items.map((item, index) =>
        index === items.length - 1 ? (
          <Text className={styles.breadcrumbs_item} key={index}>
            {t(item)}
          </Text>
        ) : (
          <Fragment key={index}>
            <Link href={routes[item]} className={styles.breadcrumbs_item}>
              {t(item)}
            </Link>
            <img src="/icons/breadcrumbs-separator.svg" width={8} height={8} />
          </Fragment>
        )
      )}
    </div>
  )
}

export default Breadcrumbs
