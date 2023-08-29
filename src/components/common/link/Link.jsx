import Link from 'next/link'
import Image from 'next/image'
import styles from './link.module.scss'

const LinkText = ({
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
        isWhite ? styles.white : styles.darrk
      } ${className}`}
      {...props}
    >
      {children}
      {!hideIcon && (
        <Image
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

export default LinkText
