'use client'
import styles from './link.module.scss'
import NextLink from 'next/link'
import { useLang } from '@/locales'

export const Link = ({ children, href, ...props }) => {
  const { lang } = useLang()
  const external = props.external
  delete props.external
  return (
    <NextLink
      href={(!external && lang === 'en' ? '/' + lang : '') + href}
      {...props}
    >
      {children}
    </NextLink>
  )
}

export const LinkWithIcon = ({
  children,
  href,
  isWhite = false,
  className,
  hideIcon,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`${styles.container} ${
        isWhite ? styles.white : styles.dark
      } ${className}`}
      {...props}
    >
      {children}
      {!hideIcon && (
        <img
          src={
            isWhite ? '/icons/link-arrow-white.svg' : '/icons/link-arrow.svg'
          }
          width={11}
          height={11}
          alt="arrow"
        />
      )}
    </Link>
  )
}
