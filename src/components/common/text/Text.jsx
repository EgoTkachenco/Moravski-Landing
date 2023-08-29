'use client'
import styles from './text.module.scss'

const tags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  text: 'p',
}

const Text = ({ children, as, type = 'text', className = '', ...props }) => {
  const textClasses = `${styles[type]} ${className}`
  const Tag = as ? as : tags[type] || 'p'
  return (
    <Tag className={textClasses} {...props}>
      {children}
    </Tag>
  )
}

export default Text
