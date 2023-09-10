'use client'
import styles from './breadcrumbs.module.scss'
import { Breadcrumbs as BreadcrumbsCore, Anchor } from '@mantine/core'
import Image from 'next/image'
import { useText } from '@/locales'

const Breadcrumbs = ({ items }) => {
  const t = useText()
  return (
    <BreadcrumbsCore
      separator={
        <Image src="/icons/breadcrumbs-separator.svg" width={8} height={8} />
      }
      mt="xs"
      className={styles.breadcrumbs}
    >
      {items.map((item, index) => (
        <Anchor
          href={item.href}
          key={index}
          className={styles.breadcrumbs_item}
        >
          {t(item.title)}
        </Anchor>
      ))}
    </BreadcrumbsCore>
  )
}

export default Breadcrumbs
